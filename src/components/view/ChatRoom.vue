<template>
<div id="chatroom-container">

<div id="chatroom-header">
<img src="@/assets/backbtn.png" @click.stop="logout()"></img> 
<span>{{room.room_name}}</span>
</div>


<b-list-group class="panel-body" v-chat-scroll>
<b-list-group-item v-for="item in chats" :key="item.id" class="chat">

<div class="right clearfix" v-if="item.nickname === nickname">
<div class="chat-body clearfix">
  <div class="header">
    <strong class="primary-font">{{ item.nickname }}</strong> <small class="pull-left text-muted">
    <span class="glyphicon glyphicon-time"></span>{{ item.created_date }}</small>
  </div>
  <p>{{ item.message }}</p>
</div>
<b-img right src="http://placehold.it/50/55C1E7/fff&text=ME" rounded="circle" width="50" height="50" alt="img" class="m-1" />
</div>

<div class="left clearfix" v-else>
  <b-img left src="http://placehold.it/50/55C1E7/fff&text=U" rounded="circle" width="50" height="50" alt="img" class="m-1" />
  <div class="chat-body clearfix">
    <div class="header">
      <strong class="primary-font">{{ item.nickname }}</strong> <small class="pull-left text-muted">
      <span class="glyphicon glyphicon-time"></span>{{ item.created_date }}</small>
    </div>
    <p>{{ item.message }}</p>
  </div>
</div>

</b-list-group-item>
</b-list-group>

<ul v-if="errors && errors.length">
<li v-for="error of errors" :key="error.id">
  {{error.message}}
</li>
</ul>

<div id="chatroom-footer">
<b-form @submit="onSubmit" class="chat-form">
  <b-input-group>
    <b-form-textarea id="message" :state="state" v-model.trim="chat.message"></b-form-textarea>
    <b-input-group-append>
      <b-btn type="submit" variant="info">Send</b-btn>
    </b-input-group-append>
  </b-input-group>
</b-form>
</div>

</div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import * as io from 'socket.io-client'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

export default {
  name: 'ChatRoom',
  data () {
    return {
      chats: [],
      errors: [],
      nickname: this.$route.params.nickname,
      room: [],
      chat: {},
      socket: io('http://localhost:4000')
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/chat/` + this.$route.params.id)
    .then(response => {
      this.chats = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    axios.get('http://localhost:3000/api/room/' + this.$route.params.id)
    .then(response =>{
      this.room = response.data
    })
    .catch(e=>{
    this.errors.push(e)
    })

    this.socket.on('new-message', function (data) {
      if(data.message.room === this.$route.params.id) {
        this.chats.push(data.message)
      }
    }.bind(this))
  },
  methods: {
    logout () {
      this.socket.emit('save-message', { room: this.chat.room, nickname: this.chat.nickname, message: this.chat.nickname + ' left this room', created_date: new Date() });
      this.$router.push({
        name: 'mainPage'
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.chat.room = this.$route.params.id
      this.chat.nickname = this.$route.params.nickname
      axios.post(`http://localhost:3000/api/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', response.data)
        this.chat.message = ''
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

#chatroom-container{
  display : flex;
  flex-direction : column;
  justify-content: space-between;
  position : relative;
  height : 100vh;
}

#chatroom-header{
  display : flex;
  position: relative;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  background-color:#2395fc;
  height : 10vh;
  color : #fff;
  font-size : 1.5rem;
}

#chatroom-header > img{
  position: absolute;
  top : 10px;
  left : 10px;
  height: 7vh;
  width : 7vh;

}

#chatroom-footer{
display : flex;
flex-direction : row;
justify-content : space-around;
height: 15vh;
bottom:0;
}

#chatroom-footer textarea{
  flex-grow : 2;
  margin-right : 30px;
}
#chatroom-footer button {
  background-color : #9edaff;
  border : 0;

}


div.list-group{
  display : flex;
  flex-direction : column;
  margin: 5vh 0 ;
  flex-grow : 2;
  scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* IE 10+ */
}

div.list-group::-webkit-scrollbar{
    width: 0;
    height: 0;
}

div.list-group-item{
  border : 0;
}

div.chat-body{
  max-width : 300px;
  padding : 10px;
  margin : 0 5px;
  font-size : 0.8rem;
  border-radius : 1.5em;
}

div.right {
  display : flex;
  flex-direction: row;
  justify-content : flex-end;
}

div.right div.chat-body{
text-align: right;
padding-left : 25px;
  background-color : #9edaff !important;
}
div.left {
  display : flex;
  flex-direction: row;
  padding-right : 25px;
  justify-content : flex-start;
}

div.left div.chat-body{
 text-align: left;
  background-color : #efefef !important;
}


  /* 채팅글자 */
  .chat .chat-body p {
    margin: 0;
    color: #777777;
  }
  
  /* 전체채팅창 */
  .panel-body {
    overflow-y: scroll;
    height: 350px;
  }

  .chat-form {
    margin: 20px auto;
    width: 80%;
  }




</style>

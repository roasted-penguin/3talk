<template>
  <b-row>
  
    <b-col cols="12">
      <h2>
        <!-- Room을 Roomname이 저장된 db에서 받아온 방이름으로 바꿔야함 -->
        roomname - <b-btn size="sm" @click.stop="logout()">Logout</b-btn>        
      </h2>
      <b-list-group class="panel-body" v-chat-scroll>
        <b-list-group-item v-for="(item, index) in chats" class="chat">

          <div class="right clearfix" v-if="item.nickname === nickname">
            <b-img right src="http://placehold.it/50/55C1E7/fff&text=ME" rounded="circle" width="50" height="50" alt="img" class="m-1" />
            <div class="chat-body clearfix">
              <div class="header">
                <strong class="primary-font">{{ item.nickname }}</strong> <small class="pull-left text-muted">
                <span class="glyphicon glyphicon-time"></span>{{ item.created_date }}</small>
              </div>
              <p>{{ item.message }}</p>
            </div>
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
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>

      <b-form @submit="onSubmit" class="chat-form">
        <b-input-group prepend="Message  ">
          <b-form-input id="message" :state="state" v-model.trim="chat.message"></b-form-input>
          <b-input-group-append>
            <b-btn type="submit" variant="info">Send</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form>

    </b-col>
  </b-row>
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
        name: 'RoomList'
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
  /* left,right 채팅블록. margin : 그림과 text사이 간격 */
  .chat .left .chat-body {
    text-align: left;
    margin-left: 80px;
  }

  .chat .right .chat-body {
    text-align: right;
    margin-right: 80px;
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

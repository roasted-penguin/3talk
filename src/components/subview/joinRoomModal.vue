<template>

<div id="joinroom-container">

<span>Join Room</span>

<b-form @submit="onSubmit">
  <b-form-group id="fieldsetHorizontal">
    <b-form-input id="nickname" :state="state" v-model.trim="chat.nickname" placeholder="nickname"></b-form-input>
  </b-form-group>

  <b-button type="submit" variant="primary">Join</b-button>

</b-form>

</div>

</template>

<script>

import axios from 'axios'
import * as io from 'socket.io-client'

export default {
  name: 'JoinRoom',
  props : [
    'Rid'
  ],

  data () {
    return {
      chat: {},
      socket: io('http://localhost:4000')
    }
  },

  created() {
  console.log(this.Rid);
  },

  methods: {

    onSubmit (evt) {
      evt.preventDefault()
      this.chat.room = this.Rid;
      this.chat.message = this.chat.nickname + ' join the room'
      
      axios.post(`http://localhost:3000/api/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', { room: this.chat.room, nickname: this.chat.nickname, message: 'Join this room', created_date: new Date() });
        this.$router.push({
          name: 'ChatRoom',
          params: { id: this.Rid, nickname: response.data.nickname }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }

}

</script>
<style>
#joinroom-container{
  position : relative;
  display : flex;
  flex-direction : row;
  justify-content : center;
}
#joinroom-container > span{
  position: absolute;
}
#joinroom-container>form{
  margin-top : 40px;
}
#joinroom-container button{
  transform : translateX(125%);
}
</style>
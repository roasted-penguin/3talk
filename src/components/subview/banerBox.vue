<template>
<div id="banner-container2">
	
  <div v-for="number in [currentnumber]" transition ="fade">
	
  <img v-bind:src="baners[Math.abs(currentnumber) % baners.length]" class="banner-background" v-on:mouseout="startRotation" v-on:mouseover="stopRotation"></img>


  </div>

  <div id="random-entry" v-show="currentnumber % baners.length == 2" >
  <p>Do chat randomly!</p>
  <b-button @click="random" >random </b-button>
  </div>
</div>

</template>
<script>
import banner1 from '@/assets/banner1.jpg'
import banner2 from '@/assets/banner2.png'
import banner3 from '@/assets/banner3.png'
import axios from 'axios'
import * as io from 'socket.io-client'


export default {
  name: 'banerBox',

  data () {
    return {
    currentnumber: 0,
    baners : [banner1,banner2,banner3],
    timer : null,
    rooms : [],
    chat: {},
    socket: io('http://localhost:4000')
    }  
  },

  created () {
    this.startRotation();
    axios.get(`http://localhost:3000/api/room`)
    .then(response => {
      this.rooms = response.data
    })
  },

  methods: {

  startRotation : function(){
    this.timer = setInterval(this.next, 5000);
  },

  stopRotation : function(){
  clearTimeout(this.timer);
  this.timer = null;
  },

  next : function(){
  this.currentnumber += 1;
  },

  random : function(evt){
    var n = Math.floor(Math.random() * this.rooms.length);

      evt.preventDefault()
      this.chat.room = this.rooms[n]._id;
      this.chat.message = ' Anonymous1 join the room'
      
      axios.post(`http://localhost:3000/api/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', { room: this.chat.room, nickname: "Anonymous1", message: 'Join this room', created_date: new Date() });
        this.$router.push({
          name: 'ChatRoom',
          params: { id: this.rooms[n]._id, nickname: "Anonymous1" }
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

#banner-container2{
  display : flex;
  flex-direction : column;
  position: relative;
  widht: 40vw;
  min-width:500px;
  height : 305px;
}

.banner-background{
  width: 40vw;
  min-width : 500px;
}

#random-entry{
  position: absolute;
  top: 10px;
  right : 20px;
  z-index : 2;
}


</style>

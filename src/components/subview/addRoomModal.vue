<template>
<div>
<div id="addroom-container">

<span class="fs600">Add Room</span>

<b-form @submit="onSubmit">
<b-form-group id="fieldsetHorizontal">
  <b-form-input id="room_name" :state="state" v-model.trim="room.room_name" placeholder="chatroom name"></b-form-input>
</b-form-group>
<b-button type="submit" variant="primary">Add</b-button>
</b-form>

</div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'AddRoom',
  data () {
    return {
      room: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/room`, this.room)
      .then(response => {
        this.$router.go(0);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

#fs600{
  font-weight : 600;  
}

#addroom-container{
  position : relative;
  display : flex;
  flex-direction : row;
  justify-content : center;
}
#addroom-container > span{
  position: absolute;
}
#addroom-container>form{
  margin-top : 40px;
}
#addroom-container form button{
  align-self :center !important;
}
</style>
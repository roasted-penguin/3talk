<template>


<div id="Modal-container">




<b-table id="chatListTable" striped hover :items="rooms" :fields="fields">
  <template slot="actions" scope="row">
    <b-btn size="sm" @click.stop="join(row.item._id)">Join</b-btn>
  </template>
</b-table>

<ul v-if="errors && errors.length">
  <li v-for="error of errors">
    {{error.message}}
  </li>
</ul>
    

<img id="addRoomBtn" src="@/assets/closebtn.png" @click="open"></span>
<addRoomModal id="addRoomModal" v-show="modalIsOpen"></addRoomModal>
</div>

</template>

<script>

import axios from 'axios'
import addRoomModal from '@/components/subview/addRoomModal'

export default {
  name: 'roomListModal',

  components : {

  addRoomModal
  
  },

  data () {
    return {
      
      fields: {
        room_name: { label: 'Room Name', sortable: true, 'class': 'text-center' },
        created_date: { label: 'Created Date', sortable: true, 'class': 'text-center' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      rooms: [],
      errors: [],
      modalIsOpen : false
    }
  },

  created () {
    axios.get(`http://localhost:3000/api/room`)
    .then(response => {
      this.rooms = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods: {
    join (id) {
      console.log(id)
      this.$router.push({
        name: 'JoinRoom',
        params: { id: id }
      })

  },

  open : function(){
  modalIsOpen = true;
  }
  }
}
</script>

<style>

#Modal-container{
display : flex;
flex-direction : column;
position : relative;
background-color : #eee;
width  : 30vw;
min-width : 450px;
height : 70vh;
overflow-y : scroll;
scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* IE 10+ */
}

#Modal-container::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
#chatListTable{
}
#addRoomBtn {
  width : 50px;
   align-self: center;
}


</style>
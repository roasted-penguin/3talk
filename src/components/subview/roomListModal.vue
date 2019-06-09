<template>


<div id="Modal-container">




<b-table id="chatListTable" hover :items="rooms" :fields="fields">
  <template slot="actions" scope="row">
    <b-btn size="sm" @click.stop="join(row.item._id)" @contextmenu.prevent="remove(row.item._id)">Join</b-btn>
  </template>
</b-table>

<ul v-if="errors && errors.length">
  <li v-for="error of errors">
    {{error.message}}
  </li>
</ul>
    

<img id="addRoomBtn" src="@/assets/openbtn.png" @click="open" v-show="!addRoomModalIsOpen"></img>

<div id="addRoomModal" v-show="addRoomModalIsOpen">
  <addRoomModal></addRoomModal>
  <img id="close-addRoomBtn" class="shadow" src="@/assets/closebtn.png" @click ="close"></img>
</div>

<div id="joinRoomModal" v-show="joinRoomModalIsOpen">
<joinRoomModal :Rid="rooms_id"></joinRoomModal>
<img id="close-addRoomBtn" class="shadow" src="@/assets/closebtn.png" @click ="close"></img>
</div>

</div>

</template>

<script>

import axios from 'axios'
import addRoomModal from '@/components/subview/addRoomModal'
import joinRoomModal from '@/components/subview/joinRoomModal'

export default {
  name: 'roomListModal',

  components : {

  addRoomModal,
  joinRoomModal
  
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
      rooms_id : "" ,
      addRoomModalIsOpen : false,
      joinRoomModalIsOpen : false
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
      this.joinRoomModalIsOpen = true;
      this.rooms_id = id;


  },

    remove (id) {
      console.log(id)
      axios.delete('http://localhost:3000/api/room/'+id)
      .then(response => {
        this.$router.go(0);
      })

  },

  open : function(ev){
  this.addRoomModalIsOpen = true;
  },
  
  close : function(ev){
  this.addRoomModalIsOpen = false;
  this.joinRoomModalIsOpen = false;
  }
  }
}
</script>

<style>

#Modal-container{
padding : 10px;
box-sizing: border-box;
position:relative;
display : flex;
flex-direction : column;
background-color : #fafafa;
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
  font-size : 0.8em;
  border-collapse : separate;
  border-spacing : 0em 0.7em;
  font-weight : 600;
  color : #666;
}

#chatListTable> thead{
  border : 0px;
}
#chatListTable > thead *{
  border : 0px;
}

#chatListTable > tbody *{
  border : 0px;
}

#chatListTable tr:hover{
  border-radius : 15px;
  background-color : #2395fc;
  color : #fff !important;
  font-size : 1.1em;
  transition : all 0.3s ease-in-out;
}





#addRoomBtn {
  position : fixed;
  bottom : 10px;
  width : 40px;
  right : 50%;
  transform : translateX(50%);
 align-self: center;
 margin-bottom : 50px;
}

#close-addRoomBtn{
  width : 30px;
  position: absolute;
  right : 7px;
  top : 7px;
}

#addRoomModal{
  padding : 10px;
  box-sizing : border-box;
  display : flex;
  flex-direction: column;
  align-items : center;
  position : absolute;
  align-self: center;
  bottom: 10px;
  width : 400px;
  background-color : #fff;
  border : 2px solid #eee;
}

#joinRoomModal{
  padding : 10px;
  box-sizing : border-box;
  display : flex;
  flex-direction: column;
  align-items : center;
  position : absolute;
  align-self: center;
  bottom: 10px;
  width : 400px;
  background-color : #fff;
  border : 2px solid #eee;
}

</style>
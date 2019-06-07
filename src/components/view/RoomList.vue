<template>
  <b-row>
    <b-col cols="12">
       <img src="@/assets/roomlist.png" id ="logo">
       <div class="img-banner" :style="{'background-image': 'url(' + require('@/assets/addroom_background.png') + ')'}"></div>
      <h2>
        <b-link href="#/add-room">㊉</b-link>
      </h2>
      <div>{{ description }}</div>
      <b-table striped hover :items="rooms" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="join(row.item._id)">Join</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RoomList',
  data () {
    return {
      fields: {
        room_name: { label: 'Room Name', sortable: true, 'class': 'text-center' },
        created_date: { label: 'Created Date', sortable: true, 'class': 'text-center' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      rooms: [],
      errors: []
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
    }
  }
}
</script>

<style>

#img-banner{
  padding : 30px;
	display : flex;
	flex-direction : column;
	align-items: center;
  background-image : url("~@/assets/addroom_background.png") !important;
  background-size : cover;
  height : 100%;
}

</style>
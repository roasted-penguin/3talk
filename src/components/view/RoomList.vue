<template>

<div id="room-list">

<span> room-list </span>
<b-link href="#/add-room">㊉</b-link>
<roomListModal></roomListModal>
</div>

</template>

<script>
import axios from 'axios'
import roomListModal from '@/components/subview/roomListModal'

export default {
  name: 'RoomList',

  component  : {
    roomListModal
  },

  data () {
    return {
    }  
  },

  created () {


  },

  methods: {

  }

}

</script>

<style>

</style>
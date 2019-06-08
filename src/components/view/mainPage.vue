<template>

<div id="main_container">

<span> room-list </span>
<b-link href="#/add-room">㊉</b-link>

<roomListModal></roomListModal>
</div>

</template>

<script>
import axios from 'axios'
import roomListModal from '@/components/subview/roomListModal'

export default {
  name: 'main',

  components  : {
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

#main_container {
  display : flex;
  flex-direction : column;
  align-items : center;
}

</style>
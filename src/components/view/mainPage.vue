<template>

<div id="main_container">

<span> room-list </span>

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
  height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content :space-around;
}

</style>
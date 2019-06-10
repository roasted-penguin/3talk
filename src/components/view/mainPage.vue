<template>

<div id="main_container">
<banerBox></banerBox>
<roomListModal></roomListModal>
</div>

</template>

<script>
import axios from 'axios'
import roomListModal from '@/components/subview/roomListModal'
import banerBox from '@/components/subview/banerBox'

export default {
  name: 'main',

  components  : {
    roomListModal,
    banerBox
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
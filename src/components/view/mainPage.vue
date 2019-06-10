<template>

<div id="main_container">
<div id="banner-container">
<pre class="banner-text">Free Open Talk, 
3Talk</pre>
<img  id="banner" src ="@/assets/banner1.png"></img>
</div>
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

#banner-container {
  position: relative;
  width : 40vw;
  min-width : 500px;
}

.banner-text{
  position : absolute;
  top : 80px;
  left : 40px;
  font-weight : 700;
  font-size : 1.5rem;
  color: #444;
}


#banner{
  width : 40vw;
  min-width : 500px;
}

#main_container {
  height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content :space-around;
}

</style>
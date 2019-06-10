<template>
<div id="banner-container2">
	<div v-for="baner in baners">
	<img v-bind:src="baner" class="banner-background"></img>
  <p></p>
  <div class=".icon"></div>
  </slot>
	</div>
</div>

</template>
<script>
import banner1 from '@/assets/banner1.png'

export default {
  name: 'banerBox',

  data () {
    return {

    baners : [banner1]
    }  
  },

  created () {


  },

  methods: {

  }

}
</script>
<style>

#banner-container2{
  position: relative;
  overflow: hidden;
  widht: 40vw;
  min-width:500px;
}

.banner-background{
  width: 40vw;
  min-width : 500px;
}

.icon {
  width : 10px;
  height : 10px;
  background-color : 
}

</style>

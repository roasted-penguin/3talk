<template>
<div id="banner-container2">
	
  <div v-for="number in [currentnumber]" transition ="fade">
	
  <img v-bind:src="baners[Math.abs(currentnumber) % baners.length]" class="banner-background" v-on:mouseout="startRotation" v-on:mouseover="stopRotation"></img>
	
  </div>
</div>

</template>
<script>
import banner1 from '@/assets/banner1.png'
import banner2 from '@/assets/banner2.png'
import banner3 from '@/assets/banner3.png'

export default {
  name: 'banerBox',

  data () {
    return {
    currentnumber: 0,
    baners : [banner1,banner2,banner3],
    timer : null
    }  
  },

  created () {
    this.startRotation();
  },

  methods: {

  startRotation : function(){
    this.timer = setInterval(this.next, 5000);
  },

  stopRotation : function(){
  clearTimeout(this.timer);
  this.timer = null;
  },

  next : function(){
  this.currentnumber += 1;
  }
  
  }

}
</script>
<style>

#banner-container2{
  display : flex;
  flex-direction : column;
  position: relative;
  widht: 40vw;
  min-width:500px;
  height : 305px;
  overflow: hidden;
}

.banner-background{
  width: 40vw;
  min-width : 500px;
}


</style>

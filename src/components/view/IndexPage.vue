<template>
<div id="content-box">

<img src="@/assets/logo.png" id ="logo">

<form action="#" >

<blueButton @click="handleClick" v-on:mouseover="handleHover" >Enter</blueButton>

</form>

</div>

</template>

<script>

import axios from 'axios'
import BlueButton from '@/components/src/blueButton'

export default {
  name: 'LoginPage',

  components :{
  	BlueButton,
 
  },

  data () {
    return {
     
     modalIsOpen :  false


    }
  },
  created () {


  },

  methods: {
    handleClick : function(ev){
    this.$router.push('/room-list');
    },

    handleHover : function(ev){
      this.$el.querySelector('blueButton').style.border = "1px solid #fff";
    },

    formOpen : function(ev){
    this.modalIsOpen = true;
    },

    formClose : function(ev){
    this.modalIsOpen = false;
    }

  }
}
</script>

<style>

#content-box{
  padding : 30px;
	display : flex;
	flex-direction : column;
	align-items: center;
  background-image : url("~@/assets/login_background.png") !important;
  background-size : cover;
  height : 100%;
}

#logo{
	margin-top : 2em;
	width : 15em;
	transfrom: traslateY(-15%);
}

form {

	margin-top : 3em;
	display : flex;
	flex-direction : column;
	align-items: center;
}

form > *{
	margin: 0.3em;
}

form> TalkButton{
	padding : 0.6em 1.3em;	
}
 
 .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}

</style>
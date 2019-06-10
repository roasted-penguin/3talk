<template>
<div id="content-box">

<img src="@/assets/logo.png" id ="logo">

<b-button id="enterbtn" @click="handleClick" >Enter</b-button>

</div>

</template>

<script>

import axios from 'axios'

export default {
  name: 'LoginPage',

  data () {
    return {
     active : false,
     modalIsOpen :  false


    }
  },
  created () {


  },

  methods: {
    handleClick : function(ev){
    this.$router.push('/main');
    }
  }
}
</script>

<style>

#content-box{
  padding : 30px;
	display : flex;
	flex-direction : column;
  justify-content : space-around;
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


#enterbtn{
  background-color : #017bff;
  border : 0;
  padding : 0.6em 1.3em;  
  min-width:100px;
  width : 10vw;
  letter-spacing : 0.1em;
  margin-top : 30px;
  margin-bottom : 100px;
  font-weight:600;

 }


 .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}


</style>
<template>
<div id="content-box">

<img src="@/assets/logo.png" id ="logo">

<form action="#" >

<b-button id="enterbtn" @click="handleClick" >Enter</b-button>

</form>

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


 
 button#enterbtn{
  background-color : #017bff;
  border : 0;
  padding : 0.6em 1.3em;  
 }

 button#enterbtn :hover{
  background-color : #fff;
 }

 .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}

 #enterbtn {

min-width:100px;
width : 10vw;
letter-spacing : 0.1em;
}

</style>
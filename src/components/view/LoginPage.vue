<template>
<div id="content-box">
<img src="@/assets/logo.png" id ="logo">

<form action="#" >

<label for="id" class = "a11y-hidden">아이디</label>
<input1 type="text" placeholder="user_id" id="id"></input1>
<label for="password" class = "a11y-hidden">아이디</label>
<input1 type="password" placeholder="user_password" id="password"></input1>
<blueButton v-on:click.native="handleClick">Log in</blueButton>

</form>

</div>
</template>

<script>

import axios from 'axios'
import BlueButton from '@/components/src/blueButton'
import input1 from '@/components/src/inputType1'

export default {
  name: 'LoginPage',

  components :{
  	BlueButton,
    input1
  },

  data () {
    return {
     
    }
  },
  created () {

  },
  methods: {
    handleClick(ev){
    this.$router.get('/room-list')
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
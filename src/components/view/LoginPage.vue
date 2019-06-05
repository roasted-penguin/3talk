<template>
<div id="main-box">
<img src="@/assets/logo.png" id ="logo">

<form action="#" >

<label for="id" class = "a11y-hidden">아이디</label>
<input type="text" placeholder="user_id" id="id">
<label for="password" class = "a11y-hidden">아이디</label>
<input type="password" placeholder="user_password" id="password">
<BlueButton @click="handleClick">Log in</BlueButton>

</form>

</div>
</template>

<script>

import axios from 'axios'
import BlueButton from '@/components/src/blueButton'

export default {
  name: 'LoginPage',

  components :{
  	BlueButton
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

#main-box{
	display : flex;
	flex-direction : column;
	align-items: center;
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
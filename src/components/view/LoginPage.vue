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

<div id="footer">
<span @click="formOpen" v-show="!modalIsOpen"><a>Join Us</a></span>
</div>
<div id="modal-container" v-show="modalIsOpen">
<newUser></newUser>
<span @click="formClose"> close </span>
</div>
</div>

</template>

<script>

import axios from 'axios'
import BlueButton from '@/components/src/blueButton'
import input1 from '@/components/src/inputType1'
import newUser from '@/components/subview/newUserModal'

export default {
  name: 'LoginPage',

  components :{
  	BlueButton,
    input1,
    newUser
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
    this.$router.get('/room-list')
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

#footer{
  position : absolute;
  bottom : 50px;
  color : #fff;
  font-weight : bold;
}

#footer : hover{
  background-color : #eee;
  opacity : 0.3;
}

#modal-container{
  position :absolute ;
  top : 50vh;
  transform : translateY(-50%);
  background-color : #eee;
  box-shadow: 0px 0px 54px -10px rgba(0,0,0,0.38);
}

</style>
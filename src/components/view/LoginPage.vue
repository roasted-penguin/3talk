<template>
<div id="content-box">
<userNav> </userNav>
<img src="@/assets/logo.png" id ="logo">

<form action="#" >

<label for="id" class = "a11y-hidden">아이디</label>
<input1 type="text" placeholder="user_id" id="id"></input1>
<label for="password" class = "a11y-hidden">아이디</label>
<input1 type="password" placeholder="user_password" id="password"></input1>
<blueButton @click="handleClick" v-on:mouseover="handleHover" >Log in</blueButton>

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
import userNav from '@/components/subview/userNav'

export default {
  name: 'LoginPage',

  components :{
  	BlueButton,
    input1,
    newUser,
    userNav
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

#footer{
  position : absolute;
  bottom : 50px;
  color : #fff;
  font-weight : bold;
}


#modal-container{
  position :absolute ;
  top : 50vh;
  transform : translateY(-50%);
  background-color : #eee;
  box-shadow: 0px 0px 54px -10px rgba(0,0,0,0.38);
}

</style>
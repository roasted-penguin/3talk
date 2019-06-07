<template>
<div id= "newUserModal">
	<form action="#" method="post">
	<label for="user_id">아이디</label>
	<input1 id="user_id"></input1>
	<label for="user_password">비밀번호</label>
	<input1 id="user_password"></input1>
  <BlueButton>Submit</BlueButton>
	</form>
</div>
</template>
<script>
import axios from 'axios'
import BlueButton from '@/components/src/blueButton'
import input1 from '@/components/src/inputType1'

export default {
  name: 'newUserModal',

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
 
  }
}
</script>
<style>

#newUserModal {
  width : 20vw;
}

 .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}
</style>
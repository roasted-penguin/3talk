<template>
<div id="nav-box">
  <img id="menu" src="@/assets/menu.png"></img>
  <div id="userInfo">
  <span> Hi! {{username}}</span>
  <img id= "userimage" src ="@/assets/girl.jpg"></img>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import BlueButton from '@/components/src/blueButton'
import input1 from '@/components/src/inputType1'

export default {
  name: 'userNav',

  components :{
  	BlueButton,
    input1
  },

  data () {
    return {
      username : "Jessica"
     
    }
  },
  created () {

  },
  methods: {
 
  }
}
</script>
<style>

#nav-box{
  height : 10vh;
  width : 500px;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items: center;
  position : absolute;
  top : 0;
  background-color : #fdfdfd;
}

#menu {
  margin-left : 20px;
  width : 1.5em;
  height: 1.5em;  
}

#userInfo{
  background-color : #eee;
  margin-right: 20px;
  border : 1px solid #eee;
  border-radius : 20px;
  box-sizing : border-box ;
  padding : 0 10px;
}

#userimage {
  width : 3em;
  height : 3em;
  border-radius : 1.5em;
  border : 2px solid #eee;

}

#userInfo {
  display : absolute;
}

 .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}
</style>
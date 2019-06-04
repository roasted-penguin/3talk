<template>
<div id="body">
  <div id="main-container">
    <div id="container1">
      <a href="#"><img src="../assets/btn1.png"></a>
      <a href="api/users"><img src="../assets/btn2.png"></a>
      <a href="#"><img src="../assets/btn3.png"></a>  
    </div>
    <div id="container2">
      <h2>Hello,{{user.username}}</h2>
      <p>{{time}}</p>
      <p>online user</p>
      <ul>
        <li v-for="virtual in virtualusers"><img v-bind:src="virtual.image" class="user-image"></img>{{virtual.username}}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/users/${id}`)
    .then((response) => {
      this.user = response.data
    });
    this.$http.get(`api/users/virtualuser`)
    .then((response) =>{
      this.virtualusers = response.data
    })
  },
  data: function () {
    return {
      user: {},
      virtualusers:{},
      time : new Date()
    }
  }
}
</script>

<style>

#body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(224,41,41,0.4);
  }


  #main-container{
    display: flex;
    flex-direction: row;
    margin-top : 75px;
    width : 700px;
    height: 500px;
    background-color: #fff;
  }
#container1{
  display: flex;
  flex-direction: column;
  width : 100px;
  align-items: center;
  justify-content: flex-start;
  background-color: #cc3333;
}

#container1 > *{
  margin : 10px 0px 10px 0px;
}

#container1 > *:hover{
  opacity: 0.7;
}

#container2{
  padding: 10px;

}

ul{
  margin-top : 100px;
  display : flex;
  flex-direction : row;
}

li{
  list-style-type :none;
  margin-right : 10px;
  display : flex;
  flex-direction : column;
  align-items : center;
}

.user-image{
  width: 100px;
}
</style>

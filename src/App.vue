<template>
  <div id="app">
    <div id="main-box">
      <router-view/>
    </div>
  </div>
</template>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display : flex ;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : #eee;
  color: #2c3e50;
}
#main-box {
  padding : 30px;
  width : 40vw;
  min-width: 500px;
  height : 100vh;
  background-color : #fff;
}
</style>

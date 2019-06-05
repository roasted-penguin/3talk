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

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display : flex ;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : #eee;
}
#main-box {
  width : 40vw;
  min-width: 500px;
  height : 100vh;
  background-color : #fff;
}
</style>

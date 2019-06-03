<template>
  <div>
    <h1>Hello,{{user.username}}</h1>
    <img v-bind:src="user.image" class="poster">
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/users/${id}`)
    .then((response) => {
      this.user = response.data
    })
  },
  data: function () {
    return {
      user: {}
    }
  }
}
</script>
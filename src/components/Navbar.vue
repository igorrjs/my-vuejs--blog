<template>
  <nav class="navbar navbar-expand-sm my-navbar navbar-dark sticky-top">
    <router-link to="/" exact class="navbar-brand" href="#"><img src='../assets/logo.png' class="logo"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" exact class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" exact class="nav-link">Contact</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="login">
          <router-link to="/newpost" exact class="nav-link">New Post</router-link>
        </li>
        <li class="nav-item" v-if="login" v-on:click="setLogin()">
          <router-link to="/" exact class="nav-link"><i class='fas fa-user-alt-slash ef-rem' style="font-size:14px"></i> Log Out</router-link>
        </li>
        <li class="nav-item" v-if="!login" v-on:click="setLogin()">
          <router-link to="/" exact class="nav-link"><i class='fas fa-user-alt' style="font-size:14px"></i> Log In</router-link>
        </li>
      </ul>
    </div>  
  </nav>
</template>

<script>
export default {
  methods: {
    setLogin: function(){
      this.$store.dispatch('setLogin');
    }
  },
  computed: {
    login(){
      return this.$store.state.login
    }
  },
}
</script>

<style>
</style>
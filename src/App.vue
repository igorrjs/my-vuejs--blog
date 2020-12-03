<template>
  <div id="app" class="App">
    <div class="jumbotron text-left large-img">
      <h1 class="text-light font-weight-bold">MY VUE.JS BLOG</h1>
      <span class="bg-dark text-light">&#9734; A small project to showcase some of my Vue &amp; Vuex skills &#9734;</span> 
    </div>
    <app-navbar></app-navbar>
    <div class="container" style="margin-top:30px">
      <div class="row">
        <div class="col-sm-8">
          <router-view></router-view>
        </div>
        <div class="col-sm-4">
          <app-sidebar></app-sidebar>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-sidebar': Sidebar
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.large-img {
  background: url(./assets/large-img.jpg) left center no-repeat #000000;
  border-radius: 0px;
  margin-bottom: 0px;
}
.large-img span {
  padding: 5px;
}
.logo {
  width: 26px;
  height: 26px;
}
.my-navbar {
  background-color: #282c34;
}
.jumbotron-footer {
  background-color: #282c34;
  border-radius: 0px;
  margin-bottom: 0px;
}
.card-title-vue {
  color: #21759b;
}
a.card-title-vue:hover {
  text-decoration: none;
  color: #d54e21;
}
.App {
  background-color: #F8F8F8;
}
a.list-group-item-light:hover {
  text-decoration: none;
}
#toTop {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 9999;
  color: #21759b;
  font-size: 50px;
  cursor: pointer;
}
#toTop:hover {
  color: #d54e21;
}
.card {
  overflow: hidden;
}
.card .card-body img {
  position: absolute;
  top: 10px;
  right: -50px;
  width: 150px;
  height: 150px;
  opacity: 0.3;
}
</style>
<template>
  <div>
    <h2 v-if="search == ''">RECENT POSTS</h2>
    <h2 v-if="search !== ''">SEARCH RESULT<app-search></app-search></h2>
    <div class="card mb-4" v-for="(post, index) in filteredPosts" v-bind:key="index">
      <div class="card-body">
        <img v-bind:src="require('@/assets/logo.png')" />
        <router-link v-bind:to="'/post/' + post.id" exact class="card-title card-title-vue"><h2>{{post.title}}</h2></router-link>
        <p class='text-secondary'>Posted <i class='far fa-clock' style="font-size:14px"></i> {{moment(post.postedOn).format('LL')}} by <i class='far fa-user-circle ef-rem' style="font-size:14px"></i> {{post.author}} in <i class='far fa-folder-open' style="font-size:14px"></i> <span v-for="(category, index) in post.categories" v-bind:key="index">{{category}} </span></p>
        <p class="card-text">{{post.content.slice(0,265) + " ..."}}</p>
        <router-link v-bind:to="'/post/' + post.id" exact><button type="button" class="btn btn-info">Read More <i class='fas fa-angle-double-right' style="font-size:12px"></i></button></router-link>
      </div>
    </div>
    <div v-if="posts.length==0" class="card mb-4">
      <div class="card-body">
        <p class="card-text">No Posts Yet.</p>
      </div>
    </div>
    <div v-if="filteredPosts.length==0 && posts.length > 0" class="card mb-4">
      <div class="card-body">
        <p class="card-text">No Such Post Found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Search from './Search.vue'

export default {
  components: {
    'app-search': Search
  },
  computed: {
    posts(){
      return this.$store.state.posts
    },
    search(){
      return this.$store.state.search
    },
    filteredPosts: function(){
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    moment
  },
  created(){
    window.scrollTo(0, 0);
  }
}
</script>

<style>
</style>
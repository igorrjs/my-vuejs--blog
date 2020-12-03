<template>
  <div class="card mb-4">
    <div class="card-body">
      <img v-bind:src="require('@/assets/logo.png')" />
      <h2 class="card-title card-title-vue">{{post.title}}</h2>
      <p class='text-secondary'>Posted <i class='far fa-clock' style="font-size:14px"></i> {{moment(post.postedOn).format('LL')}} by <i class='far fa-user-circle' style="font-size:14px"></i> {{post.author}} in <i class='far fa-folder-open' style="font-size:14px"></i> <span v-for="(category, index) in post.categories" v-bind:key="index">{{category}} </span></p>
      <p class="card-text">{{post.content}}</p>
      <button type="button" class="btn btn-danger" v-if="login" v-on:click="deletePost(id)">Delete Post<i class='fas fa-times ml-2' style="font-size:16px"></i></button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
	data(){
		return {
			id: this.$route.params.id,
			post: {}
		}
	},
	computed: {
    posts(){
      return this.$store.state.posts
    },
    login(){
      return this.$store.state.login
    }
  },
  methods: {
    deletePost: function(payload){
      this.$store.dispatch('deletePost', payload);
      this.$router.push('/');
    },
    moment
  },
  created(){
    this.post = this.posts.find(post => post.id == this.id)
    window.scrollTo(0, 0);
  }
}
</script>

<style>
</style>
<template>
  <div class="card mb-4">
    <div class="card-body">
      <img v-bind:src="require('@/assets/logo.png')" />
      <h2 class="card-title-vue">Add a New Post</h2>
      <form v-on:submit.prevent="postIt(post)">
        <div class="form-group">
          <label for="title">Post Title:</label>
          <input type="text" class="form-control" id="title" v-model.lazy="post.title" required />
        </div>
        <div class="form-group">
          <label for="content">Post Content:</label>
          <textarea class="form-control" id="content" v-model.lazy.trim="post.content" required ></textarea>
        </div>
        <div class="form-group">
          <label for="categories">Post Categories:</label>
          <div id="categories">
            <div class="form-check-inline">
              <label class="form-check-label">Heavy Metal <input type="checkbox" class="form-check-input" value="Heavy Metal" v-model="post.categories" /></label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">Death Metal <input type="checkbox" class="form-check-input" value="Death Metal" v-model="post.categories" /></label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">Groove Metal <input type="checkbox" class="form-check-input" value="Groove Metal" v-model="post.categories" /></label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">Thrash Metal <input type="checkbox" class="form-check-input" value="Thrash Metal" v-model="post.categories" /></label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">Grunge <input type="checkbox" class="form-check-input" value="Grunge" v-model="post.categories" /></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="author">Post Author:</label>
          <select class="form-control custom-select" id="author" v-model="post.author" required >
            <option v-for="(author, index) in authors" v-bind:key="index">{{ author }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-info mb-3">Submit</button>
      </form>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title-vue">Preview Post</h2>
          <h5>Post Title:</h5>
          <p>{{post.title}}</p>
          <h5>Post Content:</h5>
          <p>{{post.content}}</p>
          <h5>Post Categories:</h5>
          <ul>
            <li v-for="(category, index) in post.categories" v-bind:key="index">{{ category }}</li>
          </ul>
          <h5>Post Author:</h5>
          <p>{{post.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as uuid from 'uuid'

export default {
  data(){
    return {
      post: {
        id: uuid.v4(),
        title: '',
        content: '',
        postedOn: new Date().toUTCString(),
        author: '',
        categories: []
      }
    }
  },
  computed: {
    authors(){
      return this.$store.state.auths
    },
  },
  methods: {
    postIt: function(payload){
      this.$store.dispatch('postIt', payload);
      this.$router.push('/');
    }
  },
  created(){
    window.scrollTo(0, 0);
  }
}
</script>

<style>
</style>
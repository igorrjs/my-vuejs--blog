<template>
  <div>
    <div class="mb-4">
      <h3>Search Posts</h3>
      <input type="search" class="form-control" placeholder="search" v-model="search" v-on:keypress="searchIt(search)" v-on:blur="clearIt()"/>
    </div>
    <div class="mb-3">
      <h3>Categories</h3>
      <div class="list-group">
        <router-link to="/" exact v-for="(categ, index) in categs" v-bind:key="index" class="list-group-item list-group-item-light"><i class='far fa-folder-open mr-1' style="font-size:14px"></i> {{categ}}</router-link>
      </div>
    </div>
    <div class="mb-3">
      <h3>Authors</h3>
      <div class="list-group">
        <router-link to="/" exact v-for="(authr, index) in auths" v-bind:key="index" class="list-group-item list-group-item-light"><i class='far fa-user-circle mr-1' style="font-size:14px"></i> {{authr}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search: ''
    }
  },
	computed: {
    posts(){
      return this.$store.state.posts
    },
    categs(){
      return this.$store.state.categs
    },
    auths(){
      return this.$store.state.auths
    }
  },
  methods: {
    searchIt: function(payload){
      this.$store.dispatch('searchIt', payload);
      this.$router.push('/');
    },
    clearIt: function(){
      this.search = ''
    }
  }
}
</script>

<style>
</style>
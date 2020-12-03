<template>
	<div class="card mb-4">
		<div class="card-body">
			<img v-bind:src="require('@/assets/logo.png')" />
			<h2 class="card-title card-title-vue">This Page is to Demonstrate $http.get() Requests Using vue-resource Package</h2>
			<p class="card-text text-danger">Your browser may be blocking the content of this page.</p>
			<p class="card-text text-danger">Please disable the protection temporarily.</p>
			<p class="card-text">{{about.body}}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			about: {}
		}
	},
	created() {
		window.scrollTo(0, 0);
		this.$http.get('http://jsonplaceholder.typicode.com/posts/13').then(function(data){
			this.about = data.body
		});
	}
}
</script>

<style>
</style>
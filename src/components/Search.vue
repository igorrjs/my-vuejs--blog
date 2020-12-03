<template>
	<button class="btn btn-info float-right" v-on:click="clearIt()">Clear Search<i class='fas fa-times ml-2' style="font-size:16px"></i></button>
</template>

<script>
export default {
	methods: {
		searchIt: function(payload){
			this.$store.dispatch('searchIt', payload);
			this.$router.push('/');
		},
		clearIt: function(){
			this.searchIt('')
		}
	}
}
</script>

<style>
</style>
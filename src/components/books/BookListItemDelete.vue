<template>
  <div>
    <button class="del" @click="deleteBook(book)" >x</button>
  </div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'BookListItemDelete',
		props: ['book'],
		methods: {
		...mapActions(['deleteBook'])	
		} 
	}

</script>

<style>
	.del {
			background:#ff0000;
			color: #fff;
			border: none;
			padding: 5px 9px;
			border-radius: 50%;
			cursor: pointer;
			float: right;
	}
</style>
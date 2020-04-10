<template>
    <div>
        <div class="container-fluid"> 
					<BookList v-bind:status="statusList[1]" v-bind:books="booksToRead"/>
					<BookList v-bind:status="statusList[0]" v-bind:books="currentlyReadingBooks"/>
					<BookList v-bind:status="statusList[2]" v-bind:books="readBooks"/>
        </div>
    </div>
</template>

<script>
import BookList from '../components/books/BookList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Dashboard',
	components: {
		BookList
	},
	data() {
		return {
		statusList: ["In Progress", "To Read", "Read"],
		}
	},
	created() {
		this.fetchBooks()
	},
  computed: mapGetters(['allBooks', 'booksToRead', 'readBooks', 'currentlyReadingBooks']), //Returns the books from the state (stateGetter)

	methods: {
		...mapActions(['fetchBooks']),		
	} 
}
</script>

<style>
	.container-fluid {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: stretch;
	}
</style>

<template>
    <div>
        <div class="container-fluid"> 
			<BookList v-bind:status="statusList.to_read" v-bind:books="booksToRead"/>
			<BookList v-bind:status="statusList.currently_reading" v-bind:books="currentlyReadingBooks"/>
			<BookList v-bind:status="statusList.read" v-bind:books="readBooks"/>
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
			statusList: {
				currently_reading: ["In Progress", "currently_reading"], // Splitting each status in Name and actual status (db)
				to_read: ["To Read", "to_read"],
				read: ["Read", "read"]
			}
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

<style scoped>
	.container-fluid {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: stretch;
	}
</style>

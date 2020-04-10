<template>
    <div>
        <div class="container-fluid"> 
					<BookList v-bind:status="statusList[0]" v-bind:books="bookList"/>
					<BookList v-bind:status="statusList[1]"/>
					<BookList v-bind:status="statusList[2]"/>
        </div>
    </div>
</template>

<script>
import BookList from '../components/books/BookList'
import axios from 'axios'

export default {
	name: 'Dashboard',
	components: {
		BookList
	},
	data() {
		return {
		statusList: ["In Progress", "To Read", "Read"],
		bookList: [],
		readBooks: [],
		booksToRead: [],
		currentlyReadingBooks: []
		}
	},
	created() {
		this.fetchAndFilterAllBooks()
	},

	methods: {
		async fetchAndFilterAllBooks() {
			const response = await axios.get('api/v1/books');
			const bookList = response.data

		// Filtering books list based on book reading status
			this.readBooks = bookList.filter(book => book.status === "read")
			this.booksToRead = bookList.filter(book => book.status === "to_read")
			this.currentlyReadingBooks = bookList.filter(book => book.status === "currently_reading")
		}

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

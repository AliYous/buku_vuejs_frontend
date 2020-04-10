<template>
    <div>
        <div class="container-fluid"> 
					<BookList v-bind:status="statusList[0]" v-bind:books="currentlyReadingBooks"/>
					<BookList v-bind:status="statusList[1]" v-bind:books="booksToRead"/>
					<BookList v-bind:status="statusList[2]" v-bind:books="readBooks"/>
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
			bookList.forEach(book => this.capitalizeBookAttributes(book)) //Capitalizing title, and author attributes of each books

		// Filtering books list based on book reading status
			this.readBooks = bookList.filter(book => book.status === "read")
			this.booksToRead = bookList.filter(book => book.status === "to_read")
			this.currentlyReadingBooks = bookList.filter(book => book.status === "currently_reading")
		},

		capitalizeBookAttributes(book) {
			book.title = this.capitalizeWords(book.title)
			book.author = this.capitalizeWords(book.author)
		},
		capitalizeWords(string) {
			return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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

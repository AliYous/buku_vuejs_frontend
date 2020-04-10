import axios from 'axios'
import bookHelper from '../helpers/BookHelper'
// const API_URL = 'http://localhost:3000'

// //This where the data sits
const state = {
	books: [],
	booksToRead: [],
	readBooks: [],
	currentlyReadingBooks: [],
}

// //Allows to access state information
const getters = {
	allBooks: (state) => state.books,
	booksToRead: (state) => state.booksToRead,
	readBooks: (state) => state.readBooks,
	currentlyReadingBooks: (state) => state.currentlyReadingBooks,
}

// //The action will call the API, get a response and trigger a mutation that will change the state
// //We use the action to get the data and then we change the state using the mutation (commit)
const actions = {
	async fetchBooks({ commit }) {
		const response = await axios.get('api/v1/books');
		const bookList = response.data
		bookList.forEach(book => bookHelper.capitalizeBookAttributes(book)) //Capitalizing title, and author attributes of each books
		commit("SET_BOOKS" , bookList) 
	},


	async addBook({ commit }, title) {
		const response = await axios.post('api/v1/books', {title, completed: false});
		commit('NEW_BOOK', response.data)
	},

	// We delete the book from the database first, then we dispatch to filter the main bookList, then we commit to reset all the lists - the removed item
	async deleteBook({ dispatch }, book) {
		await axios.delete(`api/v1/books/${book.id}`)
		dispatch("deleteDispatcher", book.id)
	},
	deleteDispatcher({ commit, state },  id) {
		const books = state.books.filter(book => book.id !== id)
		commit("SET_BOOKS", books )
	}

// 	async updateBook({ commit }, updatedBook) {
// 		// const response = await axios.put(`https://jsonplaceholder.typicode.com/books/${updatedBook.id}`, updatedBook);
// 		// commit('updateBook', response.data)
// 	}
}

const mutations = {

	SET_BOOKS: (state, books) => {
		state.books = books;
		state.booksToRead = books.filter(book => book.status === "to_read")
		state.readBooks = books.filter(book => book.status === "read")
		state.currentlyReadingBooks = books.filter(book => book.status === "currently_reading")
	},

    NEW_BOOK: (state, book) => state.books.unshift(book),

	// updateBook: (state, updatedBook) => {
		// const index = state.books.findIndex(book => book.id === updatedBook.id)
		// if(index !== -1) {
		// 	state.books.splice(index, 1, updatedBook);
		// }
	// }
} 

export default {
    state,
    getters,
    actions,
    mutations
}



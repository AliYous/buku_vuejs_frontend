import axios from 'axios'
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
		// bookList.forEach(book => capitalizeBookAttributes(book)) Capitalizing title, and author attributes of each books

		commit("setBooks" , bookList) 
	},
	// capitalizeBookAttributes(book) {
	// 	book.title = capitalizeWords(book.title)
	// 	book.author = capitalizeWords(book.author)
	// },
	// capitalizeWords(string) {
	// 	return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	// }

// 	async addBook({ commit }, title) {
// 		// const response = await axios.post('https://jsonplaceholder.typicode.com/books', {title, completed: false});
// 		// commit('newBook', response.data)
// 	},

// 	async deleteBook({ commit }, id) {
// 		// await axios.delete(`https://jsonplaceholder.typicode.com/books/${id}`)
// 		// commit('removeBook', id)
// 	},

// 	async updateBook({ commit }, updatedBook) {
// 		// const response = await axios.put(`https://jsonplaceholder.typicode.com/books/${updatedBook.id}`, updatedBook);
// 		// commit('updateBook', response.data)
// 	}
}

const mutations = {

	setBooks: (state, books) => {
		state.books = books;
		state.booksToRead = books.filter(book => book.status === "to_read")
		state.readBooks = books.filter(book => book.status === "read")
		state.currentlyReadingBooks = books.filter(book => book.status === "currently_reading")
	}

    // newBook: (state, book) => state.books.unshift(book),

	// removeBook: (state, id) => state.books = state.books.filter(book => book.id !== id),

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



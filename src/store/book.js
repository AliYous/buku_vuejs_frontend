import axios from 'axios'
// const API_URL = 'http://localhost:3000'

// //This where the data sits
const state = {
	books: []
}

// //Allows to access state information
const getters = {
	allBooks: (state) => state.books
}

// //The action will call the API, get a response and trigger a mutation that will change the state
// //We use the action to get the data and then we change the state using the mutation (commit)
const actions = {
	async fetchBooks({ commit }) {
        const response = await axios.get('api/v1/books');
        console.log(response.data)
		commit("setBooks" , response.data) 
	},

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

	setBooks: (state, books) => (state.books = books),

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



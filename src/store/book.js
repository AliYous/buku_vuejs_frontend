// import axios from 'axios'
import bookHelper from '../helpers/BookHelper'
import { db } from '../main'

const state = {
	books: [],
	booksToRead: [],
	readBooks: [],
	currentlyReadingBooks: [],
}

const getters = {
	allBooks: (state) => state.books,
	booksToRead: (state) => state.booksToRead,
	readBooks: (state) => state.readBooks,
	currentlyReadingBooks: (state) => state.currentlyReadingBooks,
}


const actions = {
	fetchBooks({ commit }) {
		db.collection('books').get().then(querySnapshot => {
			if (querySnapshot.empty) {
				//this.$router.push('/HelloWorld')
				console.log('empty booklist returned')
			} else {
				var bookList = [];
				querySnapshot.forEach(doc => {
					bookList.push(doc.data());
				});

				bookList.forEach(book => bookHelper.capitalizeBookAttributes(book)) //Capitalizing title, and author attributes of each books

				commit("SET_BOOKS", bookList);
			}
		});		
	},
	addBook({ dispatch }, book) {
		db.collection('books').add(book).then( () => {
			dispatch('addDispatcher', book)
		})	
	},
	addDispatcher({ commit, state }, book) {
		state.books.unshift(book) //On ajoute le nouveau livre au state puis on commit vers la mutation pour recréer les listes
		commit("SET_BOOKS", state.books)
	},

	// We delete the book from the database first, then we dispatch to filter the main bookList, then we commit to reset all the lists - the removed item
	deleteBook({ dispatch }, book) {
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



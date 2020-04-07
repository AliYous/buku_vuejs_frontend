import axios from 'axios'
// const API_URL = 'http://localhost:3000'

export default {
	namespaced: true,

	state: {
		token: null,
		user: null
	},

	getters: {

	},

	actions: {
		async signIn({ dispatch }, credentials) {
			let response = await axios.post('signin', credentials)
			dispatch('attempt', response.data.token)
		},

		async attempt({ commit }, token) {
			commit('SET_TOKEN', token)

			// try {
			// 	// check if token is valid and if it is, set the state 'user' to the current_user
			// } catch(e) {
			// 	console.log('failed')
			// }
		}
	},

	mutations: {
		SET_TOKEN (state, token) {
			state.token = token
		},

		// SET_USER (state, user) {
		// 	state.user = user
		// }
	}
}


// 12:56 vidéo 


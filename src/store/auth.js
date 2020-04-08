import axios from 'axios'

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
			dispatch('attempt', response.data.csrf) // csrf = token 
		},
		async attempt({ commit }, token) {
			commit('SET_TOKEN', token) //We set the token
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


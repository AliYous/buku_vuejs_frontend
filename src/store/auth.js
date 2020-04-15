import axios from 'axios'

export default {
	namespaced: true,

	state: {
		token: null,
		user: null,
		email: null
	},

	getters: {
		signInEmail: (state) => state.email
	},

	actions: {
		async signIn({ dispatch }, credentials) {
			let response = await axios.post('signin', credentials)
			console.log(response.data)
			dispatch('attempt', response) // csrf = token 
		},
		async attempt({ commit }, response) {
			console.log(response.data.user)
			commit('SET_TOKEN', response.data.csrf) 
			commit('SET_USER', response.data.user )
			window.location.href = 'dashboard'
		},

		async signUp(_, credentials) {
			let response =  await axios.post('signup', credentials)
			console.log(response.data)
			window.location.href = 'signin';		
		},

		setEmailState({ commit }, email) {
			commit('SET_EMAIL', email)
		}
	},

	mutations: {
		SET_TOKEN (state, token) {
			state.token = token
		},

		SET_USER (state, user) {
			state.user = user
		},

		SET_EMAIL (state, email) {
			state.email = email
		}
	}
}


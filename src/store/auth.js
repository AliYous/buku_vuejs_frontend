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
			dispatch('attempt', response.data.csrf, credentials.email) // csrf = token 
		},
		async attempt({ commit }, token, email) {
			commit('SET_TOKEN', token) //We set the token
			
			try {
				const response = await axios.get('api/v1/me', { email } ,{
					headers: {
						Authorization: 'Bearer ' + token
					}
				})
				console.log(response.data)
				commit('SET_USER', response.data)

			} catch(e) {
				commit('SET_USER', null)
				commit('SET_TOKEN', null)
			}
		}
	},

	mutations: {
		SET_TOKEN (state, token) {
			state.token = token
		},

		SET_USER (state, user) {
			state.user = user
		}
	}
}


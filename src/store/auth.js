export default {
	namespaced: true,

	state: {
		user: {
			loggedIn: false,
			data: null
		}
	},

	getters: {
		user: (state) => state.user
	},

	actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
		localStorage.setItem('current_uid', user.uid)
        commit("SET_USER", {
			displayName: user.displayName,
			email: user.email,
			user_id: user.uid
		});
      } else {
        commit("SET_USER", null);
      }
    }
  },

	mutations: {
		SET_LOGGED_IN(state, value) {
			state.user.loggedIn = value;
		},
		SET_USER(state, data) {
			state.user.data = data;
		}
	}
}


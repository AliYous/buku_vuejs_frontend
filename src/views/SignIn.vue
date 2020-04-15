<template>

	<div class="main">
		<div class="bottom-right-image">
			<!-- image css -->
		</div>

		<div class="container-fluid">
			<v-card  class="mx-auto" max-width="700">
				<h1>Authenticate</h1>
					<form class="form container">
						<v-text-field class="text-field"
						v-model="email"
						label="Email"
						required
						outlined
						color="#493E92"
						rounded
						></v-text-field>

						<v-text-field
						v-model="password"
						label="Password"
						required
						outlined
						color="#493E92"
						rounded
						></v-text-field>

						<v-btn color="#493E92" rounded large dark @click="onSignIn">Sign in</v-btn>

					</form>
			</v-card>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'SignIn',
	props: ['emailInput'],

	data() {
		return {
			form: {
				email: this.$props.emailInput,
				password: ''
			}
		}
	},
	
	created() {
		console.log(this.form.email)
		console.log(this.$props.emailInput)
	},

	methods: {
		...mapActions({
			signIn: 'auth/signIn'
		}),
			
		onSignIn() {
			// this.signIn(this.form)
			console.log("sign in")
		}
	}

}
</script>

<style scoped>
	.container-fluid {
		display: flex;
		position: absolute;
		flex-direction: column;
		align-items: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	h1 {
		margin-top: 1em;
		margin-bottom: 0.6em;
	}
	.form {
		position: relative;
		width: 90%;

	}
	.text-field {
		margin-bottom: 2em;
	}

	.bottom-right-image {
		position: absolute;
		height: 40em;
		width: 43em;
		top: -5em;
		right: -5em;
		background-image: url('../assets/reading.png');
	} 
</style>
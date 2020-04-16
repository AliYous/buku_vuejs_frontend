<template>

	<div class="main">
		<div class="top-right-image">
			<!-- image css -->
		</div>

		<div class="container-fluid">
			<v-card  class="mx-auto card" max-width="700">

				<h1 v-if="signUp">Register</h1>
				<h1 v-if="!signUp">Sign in</h1>
				
				<div v-if="error" class="alert alert-danger error">{{error}}</div>
					<form class="form container">
						<v-text-field class="text-field"
						v-if="signUp"
						v-model="form.first_name"
						required
						outlined
						color="#493E92"
						rounded
						label="First name"
						></v-text-field>

						<v-text-field class="text-field"
						v-model="form.email"
						required
						outlined
						color="#493E92"
						rounded
						label="Email"
						></v-text-field>

						<v-text-field
						v-model="form.password"
						required
						outlined
						color="#493E92"
						rounded
						label="Password"
						type="password"
						></v-text-field>

						<v-text-field
						v-if="signUp"
						v-model="form.password_confirmation"
						required
						outlined
						color="#493E92"
						rounded
						label="Password confirmation"
						type="password"
						></v-text-field>

						<v-btn v-if="signUp" color="#493E92" rounded large dark @click="onSignUp">register</v-btn>
						<v-btn v-if="!signUp" color="#493E92" rounded large dark @click="onSignIn">Sign in</v-btn>


					</form>

					<a v-if="signUp" @click="changeSignUpBool" role="button" class="already-member-text">Already a member?</a>
					<a v-if="!signUp" @click="changeSignUpBool" role="button" class="already-member-text">Create an account</a>

			</v-card>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase';


export default {
	name: 'SignIn',
	props: ['emailInput'],

	data() {
		return {
			form: {
				first_name: '',
				email: this.$props.emailInput,
				password: '',
				password_confirmation: ''
			},
			signUp: true,
			error: null
		}
	},
	
	methods: {
		...mapActions({
			signIn: 'auth/signIn'
		}),
			
		onSignIn() {
			// this.signIn(this.form)
			
		},
		onSignUp() {
			if (this.form.password !== this.form.password_confirmation) {
				this.error = 'Password and password confirmation do not match.'
				console.log(this.error)
			}
			else {
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.form.email, this.form.password)
					.then(data => {
						data.user
							.updateProfile({
								displayName: this.form.first_name
							})
							.then(() => {});
					})
					.catch(err => {
						this.error = err.message;
					});
			}
		},
		changeSignUpBool() {
			this.signUp = !this.signUp
		}
	}

}
</script>

<style scoped>

.top-right-image {
		position: absolute;
		height: 40em;
		width: 43em;
		top: -5em;
		right: -5em;
		background-image: url('../assets/reading.png');
	} 
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
	.card {
		padding: 1em;
	}

	h1 {
		margin-top: 1em;
		margin-bottom: 0.6em;
	}
	.form {
		position: relative;
		width: 90%;
		margin-bottom: 1em;

	}
	.text-field {
		margin-bottom: 2em;
	}

	.already-member-text:hover {
		text-decoration: underline;
	}
	
	.error {
		color: #EE5C66;
	}
</style>
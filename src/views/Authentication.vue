<template>

	<div class="main">
		<div class="image-container">
			<img src="../assets/reading.png" class="top-right-image">
		</div>

		<div class="container-fluid">
			<v-card  class="mx-auto card" max-width="700">

				<h1 v-if="!userExists">Register</h1>
				<h1 v-if="userExists">Sign in</h1>
				
				<div v-if="error" class="alert alert-danger error">{{error}}</div>
				
					<form class="form container">
						<v-text-field class="text-field"
						v-if="!userExists"
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
						@keypress.enter="onSignIn"
						></v-text-field>

						<v-text-field
						v-if="!userExists"
						v-model="form.password_confirmation"
						required
						outlined
						color="#493E92"
						rounded
						label="Password confirmation"
						type="password"
						@keypress.enter="onSignUp"
						></v-text-field>

						<v-btn v-if="!userExists" color="#493E92" :loading='loading' rounded large dark @click="onSignUp">register</v-btn>
						<v-btn v-if="userExists" color="#493E92" :loading='loading' rounded large dark @click="onSignIn">Sign in</v-btn>


					</form>

					<a v-if="!userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Already a member?</a>
					<a v-if="userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Create an account</a>

			</v-card>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase';
import { db } from '../main'



export default {
	name: 'SignIn',
	props: ['emailInput', 'userExistsProps'],

	data() {
		return {
			form: {
				first_name: '',
				email: this.$props.emailInput,
				password: '',
				password_confirmation: ''
			},
			userExists: this.$props.userExistsProps,
			loading: false, // for adding loading animation to submit btn
			error: null
		}
	},
	
	methods: {
		...mapActions({
			signIn: 'auth/signIn'
		}),
			
		onSignIn() {
			if(this.form.email === '' || this.form.password === '') {
				this.error = 'Please fill in all required fields'
			}
			else {
				this.loading = true
				firebase
					.auth()
					.signInWithEmailAndPassword(this.form.email, this.form.password)
					.then(() => {
						this.loading = false
						this.$router.replace({ name: "Dashboard" })
					})
					.catch(err => {
						this.error = err.message;
						this.loading = false
					});
			}
		},
		onSignUp() {
			this.loading = true
			// Checking if all form fields are valid before passing data to the db
			if(this.form.email === '' || this.form.password === '' || this.form.password_confirmation === '') {
				this.error = 'Please fill in all required fields'
				this.loading = false
			}
			else if (this.form.password !== this.form.password_confirmation) {
				this.error = 'Password and password confirmation do not match.'
				this.loading = false
			}
			else {
				// Register the user
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.form.email, this.form.password)
					.then(data => {
						// Add a document to users collection with the user name and email
						db.collection("users").doc(data.user.uid).set({
							name: this.form.first_name,
							email: data.user.email
						})
						
						data.user
							.updateProfile({
								displayName: this.form.first_name
							})
							.then(() => {
								this.loading = false
								this.changeUserExistsBool() // after user is registered, render only the signIn fields (pre-filled) so he can sign in
							});
						
						// populate books collection associated to the user
						this.populateUserBooks(data.user.uid)
						console.log("User registered and initial books added to his collection")
					})
					.catch(err => {
						this.error = err.message;
						this.loading = false
					});
			}
		},
		changeUserExistsBool() {
			this.userExists = !this.userExists
		},

		populateUserBooks(userId) {
			db.collection("books").add({
				user_id: userId,
				title: "rich dad poor dad",
				author: "robert kyosaki",
				comment: "Basics of financial education : Change your mindset about money",
				purchased: false,
				status: "to_read"
			})
			db.collection("books").add({
				user_id: userId,
				title: "the magic of thinking big",
				author: "david schwartz",
				comment: "Think outside the box and thing big to change your life and impact the world",
				purchased: true,
				status: "to_read"
			})
			db.collection("books").add({
				user_id: userId,
				title: "The war of art",
				author: "robert kyosaki",
				comment: "Recommended by Harry Jmg : All you need to know about resistance and how to beat it. Beat the little voice to finally reach your full potential.",
				purchased: true,
				status: "to_read"
			})
		}
	}

}
</script>

<style scoped>

	.image-container {
		position: absolute;
		min-width: 20%;
		top: 3.9em;
		right: -2em;
	} 
	img {
		height: auto;
		width: 100%;
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
		width: 90%;
	}
	.card {
		padding: 1em;
		width: 100%;
	}

	h1 {
		margin-top: 1em;
		margin-bottom: 0.6em;
	}
	.form {
		position: relative;
		width: 80%;
		margin-bottom: 1em;

	}
	.text-field {
		margin-bottom: -0.6em;
	}

	.already-member-text:hover {
		text-decoration: underline;
	}
	
	.error {
		color: #EE5C66;
	}
</style>
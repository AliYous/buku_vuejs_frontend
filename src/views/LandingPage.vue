<template>
	<div class="main">
			<div class="bottom-left-image">
				<!-- image -->
			</div>

			<div class="top-right-image">
				<!-- image -->
			</div>

			<div class="container-fluid">

				<div class="text-div">
					<h1>All-in-one tool for library tracking</h1>
					<h3 class="desc">Organize your library as you progress through your reading list</h3>
				</div>

				<div class="cta">
						<v-text-field
						label="Your Email"
						v-model="email"
						rounded
						solo
						@keypress.enter="onSubmit">

							<template v-slot:append>
					
									<v-btn
										rounded 
										dark
										x-large
										:loading="loading"
										color="#493E92"
										class="ma-0"
										style="margin-right:-1.5em;"
										@click="onSubmit">
									
										Get started
										
									</v-btn>
								
							</template>
								
						</v-text-field>

				</div>
			</div>
	</div>
</template>

<script>
import firebase from 'firebase';

export default {
		name: 'LandingPage',
		data() {
			return {
				email: '',
				loading: false
			}
		},
		methods: {
			onSubmit() {
				this.loading = true
			//We send a request just to see if user exists in the db, no user will ever have this pwd so it shall always return err, then we act according to the type of err
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, 'pwdinvalidforsure1267$$3impossiblepasswdpassworduser')
					.catch(err => {
						// If the email does not exist, we show the signUp fields
						if (err.code === "auth/user-not-found") {
							console.log("redirect to signup")
							this.$router.push({ name: 'Auth', params: {emailInput: this.email, userExistsProps: false}})
						}
						// If it does exist, we show the signIn fields
						else {
							console.log('redirect to signin')
							this.$router.push({ name: 'Auth', params: {emailInput: this.email, userExistsProps: true}})
						}
					});
			}
		}

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

	@media (max-width:1288px) {
		div.top-right-image {
			display: none;
		}
	}
    .container-fluid {
        display: flex;
        flex-direction: column;
				align-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
    }

		.text-div {
			text-align: center;
		}
		.desc {
			margin-bottom: 2em;
		}

		.cta {
			height: 100%;
		}

		.bottom-left-image {
			position: relative;
			height: 35.89em;
			width: 39em;
			top: 17em;
			left: -10em;
			background-image: url('../assets/reading_light_orange.png');
		}
		.top-right-image {
			position: absolute;
			height: 40em;
			width: 43em;
			top: 3em;
			right: -10em;
			background-image: url('../assets/reading.png');
		} 
   
</style>
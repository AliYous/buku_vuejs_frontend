<template>
	<div class="main">
			<div class="bottom-left-image">
				<!-- image -->
			</div>

			<div class="bottom-right-image">
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
export default {
		name: 'LandingPage',
		data() {
			return {
				email: ''
			}
		},
		methods: {
			onSubmit() {
				this.$router.push({ name: 'SignIn', params: {emailInput: this.email }})
			}
		}

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

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
			top: 18.8em;
			left: -10em;
			background-image: url('../assets/reading_light_orange.png');
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
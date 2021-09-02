<template>

	<section>
		<form class="form">
			<div class="form-wrapper">
				<div class="form-title">
					<img src="../assets/images/logo.svg" class="form-title-logo" alt="logo BestRest">
				</div>
				<div class="form-seo-text">
					<a href="#" class="cta sing-up not-underline">Sign Up </a> and find the best place to rest while traveling
				</div>
				<div class="form-inputs">
					<Inputs />
				</div>
			</div>

		</form>
		<footer>
			<div>
				If you have an account, <a href="#" class="cta">Log In</a>
			</div>
		</footer>
	</section>

</template>

<script>

import Inputs from './inputs.vue';


export default {
	name: 'Registration',
	components: { Inputs }
}

</script>

<style scoped lang="scss">
	@import '../assets/scss/mixins.scss';

	* {
		font-family: 'Rubik', sans-serif;
	}

	section {
		width: 100vw;
		height: 100vh;
		color: white;

		background-image: url( '../assets/images/bg-image.jpg' );
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		position: relative;

		.form {
			height: 100%;

			@include flex-center;
			align-items: center;
			
			&-wrapper {
				width: 630px;
				height: 560px;

				// border: 1px solid black;

				.form {
					&-title {
						@include flex-center;
						margin-bottom: 40px;

						&-logo {
							height: 50px;
						}
					}

					&-seo-text {
						@include flex-center;
						margin-bottom: 50px;
					}

					&-inputs {
						// border: 1px solid white;
						height: 400px;

						display: grid;

					}
				}

				
			}

			
		}

		footer {
			width: 100vw;
			position: absolute;
			bottom: .5em;
			font-weight: 300;

			@include flex-center;
		}
	}

	.cta {
		color: $cta-color;
	}

	.sing-up {
		margin-right: 5px;
	}

	.not-underline {
		text-decoration: none !important;
	}

	.form-seo-text {
		font-size: 24px;
	}

</style>
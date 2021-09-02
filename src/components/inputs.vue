<template>
    <div class="contain">
		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/user.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="First Name"
				v-model="userData.firstname"
          	>  
			</v-text-field>
		</div>

		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/users.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="Second Name"
				v-model="userData.secondname"
          	>  
			</v-text-field>
		</div>
		
		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/location.svg">
			<el-select
				v-model="userData.selectedCountry"
				placeholder="Country"
				@change="changeCountry"
			>
				<el-option
					v-for="(country, i) in countries"
					:key="i"
					:label="country.label"
					:value="country.value">
				</el-option>
			</el-select>
		</div>


      	<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/phone.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="Phone"
				v-model="phoneWidthMask"
			>
			</v-text-field>
		</div>

		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/lock.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="Password"
				type="password"
				v-model="userData.password"
			>
			</v-text-field>
		</div>

		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/dubble_lock.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="Confirm Password"
				type="password"
				v-model="userData.confirmPassword"
			>
			</v-text-field>
		</div>

		<div class="field">
			<img class="icon" width="24" height="24" src="../assets/images/icons/email.svg">
			<v-text-field
				hide-details
				dark
				filled
            	label="Email"
				type="email"
				v-model="userData.email"
			>
			</v-text-field>
		</div>

		<div class="field border-del">
			<div
				:class="{checkbox: true, 'checkbox-checked': userData.checkedTerms}"
				@click="userData.checkedTerms = !userData.checkedTerms"
			></div>
			<div class="agre-bttn">I agree to the <a href="#" class="cta">Terms & Conditions</a></div>
		</div>


		<div class="sing-up">
			<button
				@click.prevent="submitForm"
			>
				Sing Up
			</button>
		</div>

    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
	name: 'Inputs',
	data: () => ({
		userData: {
			firstname: '',
			secondname: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
			selectedCountry: '',
			checkedTerms: false
		},
		selectedMask: '',
		termsAndConditions: false
	}),
	computed:{
		phoneWidthMask: {
			get(){
				return this.selectedMask + this.userData.phone.replace( this.selectedMask, '' );
			},
			set( n ){
				this.userData.phone = n;
			}
		},
		...mapGetters(['countries'])
	},
	methods: {
		...mapActions(['requestCountriesAndMasks', 'submitUserData']),
		changeCountry(){
			const splitted = this.userData.selectedCountry.split( '_' );
			const code = splitted[1];

			this.selectedMask = code + ' ';
			this.phoneWidthMask = '';
		},
		submitForm(){
			this.submitUserData( this.userData );
		}
	},
	mounted(){
		this.requestCountriesAndMasks();
	}
}

</script>

<style lang="scss">
	@import '../assets/scss/mixins.scss';

	.field {
		width: 300px;
		height: 58px;
		border: 1px solid #fff;
		border-radius: 5px;
		color: #fff;
		padding-right: 1px;

		display: grid;
    	grid-template-columns: 50px 1fr;

		.icon {
			margin: auto;
			width: 25px;
		}

		.checkbox {
			width: 20px;
			height: 20px;
			border-radius: 3px;
			margin: auto;
			border: none;
			background-color: $cta-color !important;

			&-checked::after{
				content: '';
				display: block;
				width: 20px;
				height: 20px;
				
				background-image: url('../assets/images/icons/checkmark.svg');
				background-position: center;
				background-size: contain;
			}
		}

		&.error {
			border: 1px solid red;

			&::after {
				content: 'Unvalide!';
				color: red;
				display: block;
				position: relative;
				top: 3px;
				font-weight: 300;
				opacity: 0.7;
			}
		}
	}

	.contain {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(4, 56px);
		grid-gap: 30px;
		font-weight: 300;

		.sing-up {
			width: 100%;
			font-weight: 600;

			button {
				width: 165px;
				height: 56px;
				border-radius: 5px;
				color: #000;
				
				@include flex-center;
				align-items: center;
				background-color: $cta-color;
			}
		}
	}

	.agre-bttn {
		font-size: 13px;
    	font-weight: 300;
    	line-height: 56px;
	}

	// element.io change
	.el-input__inner {
		height: 58px !important;

		background-color: transparent !important;
		border: rgb(255 222 173) !important;
		color: #fff;
		padding-left: 13px;
	}

	// vuetify changes
	.v-input__slot {
		background-color: transparent !important;

		&::before {
			display: none !important;
		}
	}

	.v-text-field__slot > label {
		font-size: 14px;
		font-family: 'Rubik', sans-serif;
		font-weight: lighter;
	}

	.v-input.v-input--hide-details.theme--light.v-input--selection-controls.v-input--checkbox {
		margin: auto;
		background-color: $cta-color;
	}

	.v-text-field__slot > input {
		font-weight: 300;
	}

</style>
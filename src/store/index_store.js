import countries from './api/countries';

export default {
	actions: {
		requestCountriesAndMasks({commit}){
			// const requestRez = someApi.countries.get(...)
			const requestRez = countries;

			commit( 'addCountries', requestRez );
		}
	},
	mutations: {
		addCountries( s, n ){
			s.countries = n;
		}
	},
	state: {
		countries: []
	},
	getters: {
		countries: s => {
			return s.countries.map( country => ({
				label: country.name,
				mask: country.phone_mask,
				value: `${country.name}_${country.phone_mask}`
			}))
		}
	}
}
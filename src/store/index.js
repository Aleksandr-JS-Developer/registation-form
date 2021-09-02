import Vue from 'vue';
import Vuex from 'vuex';

import countries from './index_store.js';
import userRegistrationDataFetch from './userRegistrationDataFetch/index.js';

Vue.use( Vuex );
export default new Vuex.Store({
	modules: {
		countries,
		userRegistrationDataFetch
	}
});
import api from '../../plugins/api.js';

export default {
	actions: {
		async submitUserData({commit}, userData){

			// validations( userData );
			
			const data = {
				name: userData.firstName,
				surname: userData.secondname,
				country: userData.selectedCountry,
				phone: userData.phone,
				email: userData.email,
				password: userData.password
			}

			api.signup( data );

			const list = [1, 2, 3];

			commit( 'addUsersList', list );
		}
	},
	mutations: {
		addUsersList( s, list ){
			s.usersList = list;
		}
	},
	state: { usersList: [] },
	getters: { usersList: s => s.usersList },
}
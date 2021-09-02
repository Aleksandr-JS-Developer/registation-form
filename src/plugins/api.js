import { createClient } from '@supabase/supabase-js';

// my supabase test project
// const SUPABASE_URL = 'https://ihoiqysgfriqospbpfqq.supabase.co';
// const SUPABASE_KEY =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2MTg5NSwiZXhwIjoxOTQ2MTM3ODk1fQ.tHxXKzSgry3U7AOI7udUbk1IArWOm0uMnKK3bA41dVk';

const SUPABASE_URL = 'https://anmgeodpxvrfszcufzij.supabase.co/rest/v1';
const SUPABASE_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODUwNzUzNCwiZXhwIjoxOTQ0MDgzNTM0fQ.g47vU8N9LWJQOoV5mao0cUGeTvG5gAk515YLa51mmtI';

const supabase = createClient( SUPABASE_URL, SUPABASE_KEY );

export default {
	async signup( userData ){
		singUp( userData );
	}
};

function singUp (data){

	supabase.auth
		.signUp( data )
		.then( response => {
			console.log( 'response', response );
			response.error ? console.log(response.error.message) : setToken(response)
		})
		.catch((err) => {
			alert(err.response.text)
		});

	function setToken( response ) {
		console.log( 'setToken>response', response )
		if (response.data.confirmation_sent_at && !response.data.access_token) {
			console.log('Confirmation Email Sent')
		} else {
			console.log('Logged in as ' + response.user.email)
		}
	}
	
}
import { NgGapiClientConfig } from './google-api-config.model';

export const gapiClientConifg: NgGapiClientConfig = {
	client_id: 'YOUR CLIENT TOKEN',
	api_key: 'YOUR API KEY ',
	discoveryDocs: [
		'https://www.googleapis.com/discovery/v1/apis/people/v1/rest'
	],
	scope: 'https://www.googleapis.com/auth/contacts.readonly'
};

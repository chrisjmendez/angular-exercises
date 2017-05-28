// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "PLACE_API_KEY_HERE",
		authDomain: "PLACE_AUTH_DOMAIN_HERE",
		databaseURL: "PLACE_DATABASE_URL_HERE",
		projectId: "PLACE_PRODUCT_ID_HERE",
		storageBucket: "PLACE_STORAGE_BUCKET_HERE",
		messagingSenderId: "PLACE_MESSAGING_SENDER_ID_HERE"
	}		
};

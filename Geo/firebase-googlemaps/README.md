# Anguar 4 (RC 5.0) + Firebase + Google Maps + Google Mateial Design

## Requirements

- You will need a Google Maps API Key. [Download Now](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key)
- You will need a Firebase API Key. [Download Now](https://firebase.google.com/docs/web/setup)


## Getting Started

1. Update [firebase.config.ts](https://github.com/chrisjmendez/angular-exercises/blob/master/Geo/firebase-googlemaps/src/environments/firebase.config.ts) with your new Firebase API keys
- Update [googlemaps.config.ts](https://github.com/chrisjmendez/angular-exercises/blob/master/Geo/firebase-googlemaps/src/environments/googlemaps.config.ts) with your new Google Maps API key.
- Install 3rd party libraries using ```npm install```.
- Start the development server using ```ng serve```.


Create a .env file
```
vi /environments/.env
```

Paste your unique keys
```
export const environment = {
  production: false,
  GOOGLE_MAPS_API_KEY: "xxx",
  FIREBASE_CONFIG: {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "fxxx",
    messagingSenderId: "xxxx"
  }
};
```



Run your local server 
```
ng serve --env=local
```


## Resources Used

- [Angular 4 RC 5.0](http://angular.io)
- [Firebase](http://firebase.google.com)
- [Google Maps](http://maps.google.com)
- [Angular Material](https://material.angular.io/)

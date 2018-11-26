// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAA6xuOZcCOGqX85AlVaoZo3T2i-Yi2p8g",
    authDomain: "jiraboard-b0c8d.firebaseapp.com",
    databaseURL: "https://jiraboard-b0c8d.firebaseio.com",
    projectId: "jiraboard-b0c8d",
    storageBucket: "jiraboard-b0c8d.appspot.com",
    messagingSenderId: "626323319893"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

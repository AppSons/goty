// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/graficos-ng-firestore/us-central1',
  firebase: {
    apiKey: "AIzaSyADiAKYZgPvedWy87UwqVdqPKbXEuKiTVo",
    authDomain: "graficos-ng-firestore.firebaseapp.com",
    databaseURL: "https://graficos-ng-firestore-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "graficos-ng-firestore",
    storageBucket: "graficos-ng-firestore.appspot.com",
    messagingSenderId: "1005395367254",
    appId: "1:1005395367254:web:9cc66892d5c9a81705f2f7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

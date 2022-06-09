// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBLkoWNeqclE-64RybralTTKmo242AiY2M",
    authDomain: "redbicicletas-computacion-nube.firebaseapp.com",
    projectId: "redbicicletas-computacion-nube",
    storageBucket: "redbicicletas-computacion-nube.appspot.com",
    messagingSenderId: "79938599478",
    appId: "1:79938599478:web:d26caaa22add2558bcb697",
    measurementId: "G-8TEF5QXNE3",
  },
  rentingApi:
    "https://8anr2k1c8f.execute-api.us-east-1.amazonaws.com/prod/bicycles",
  bicyclesApi:
    "https://8anr2k1c8f.execute-api.us-east-1.amazonaws.com/prod/bicycles",
  localizationApi:
    "https://8anr2k1c8f.execute-api.us-east-1.amazonaws.com/prod/bicycles",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

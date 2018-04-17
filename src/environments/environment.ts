// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // should have a separate db instance for dev other than prod
  firebase: {
    apiKey: "AIzaSyD0sGGyCZkVfrkgkqGm39MhbgQpsSthC90",
    authDomain: "clientdashboard-1f31c.firebaseapp.com",
    databaseURL: "https://clientdashboard-1f31c.firebaseio.com",
    projectId: "clientdashboard-1f31c",
    storageBucket: "clientdashboard-1f31c.appspot.com",
    messagingSenderId: "184192641986"
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://localhost:5000/';
  cuorHost = 'https://orgs.sceiba.cu/';
  sceibaApi = 'https://localhost:5000/api/';
  cuorApi = 'https://orgs.sceiba.cu/api/';

  appHost = 'https://127.0.0.1:4200';
  appName = 'Sceiba Catalogo';
  oauthRedirectUri = 'https://127.0.0.1:4200/';
  oauthClientId = 'PWjZsqMDI2RHZ5Hs0ZGli6Z5F5cF6xZ7t1AhiDUM';
  oauthScope = 'user:email';
  topOrganizationPID = 'orgaid.223';
  cachableUrls = [];
}

export const environment = new EnvironmentImpl();


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

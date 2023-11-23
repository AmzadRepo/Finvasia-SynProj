// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  // baseUrl: 'http://192.168.1.194:8082',
  baseUrl: 'http://localhost:8081',
  gwtsJbossUrl: 'http://localhost:8080',
  gwtsBirtUrl: 'http://localhost:8088',

  // authorQueryStatus: '',
  // electronicPublicationStatus: '',
  // gwtsStatus: '',
  // customWebPdfStatus: '',
  // printOnDemandStatus: '',
  // packagerStatus: '',
  //
  // flagNotification: false,

  notifications: [],
  notificationsCount: 0,
  production: false
};

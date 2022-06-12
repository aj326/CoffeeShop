/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffeeshop-udacity-ahmed.us.auth0.com', // the auth0 domain prefix
    audience: 'menu', // the audience set for the auth0 app
    clientId: 'DrNuZGxw0roV3Mfx9pHpgsBRZaHihBaK', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100', // the base url of the running ionic application.
  }
};

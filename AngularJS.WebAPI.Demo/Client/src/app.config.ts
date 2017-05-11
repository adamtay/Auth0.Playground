angular
  .module('app')
  .config(auth0Config);

/** @ngInject */
function auth0Config(lockProvider: any) {
	lockProvider.init({
      clientID: 'BLbQB2ScK0e2zJUZvlWU2zXPCfP6LweY',
      domain: 'adamtay.au.auth0.com',
      options: {
        _idTokenVerification: false,
        closable: false,
        auth: {
        	redirect: false
        }
      }
    });
}

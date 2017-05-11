angular
  .module('app')
  .config(auth0Config);

/** @ngInject */
function auth0Config(lockProvider: any, $httpProvider: any, jwtOptionsProvider: any) {
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

    jwtOptionsProvider.config({
      tokenGetter: () => {
        return localStorage.getItem('id_token');
      },
      whiteListedDomains: ['localhost']
    });

    $httpProvider.interceptors.push('jwtInterceptor');
}

module Services {
	'use strict';

	export interface IAuthenticationService {
		login(): void;
		registerAuthenticationListener(): void;
		isAuthenticated(): boolean;
	}

	class AuthenticationService implements IAuthenticationService {
		constructor(private lock: any, private authManager: any, private $state: any, private jwtHelper: any) { }

		public login(): void {
			if (this.isAuthenticated()) {
				this.$state.go('app');
			}
			this.lock.show();
		}

		public registerAuthenticationListener(): void {
			this.lock.on('authenticated', (authResult: any) => {
        		localStorage.setItem('id_token', authResult.idToken);
        		this.authManager.authenticate();
        		this.$state.go('app');
        		this.lock.hide();
      		});
      
      		this.lock.on('authorization_error', (err: any) => {
        		console.log(err);
      		});
		}

		public isAuthenticated(): boolean {
			var token = localStorage.getItem('id_token');
			return token !== undefined && token !== null && token !== '' && !this.jwtHelper.isTokenExpired(token);
		}
	}

	angular.module('app').service('authenticationService', AuthenticationService);
}

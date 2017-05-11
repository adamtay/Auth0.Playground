module Controllers {
	'use strict';

	export class AuthenticationController {
		constructor(private authenticationService: Services.IAuthenticationService) {
			this.initialise();
		}

		private initialise(): void {
			this.authenticationService.login();
		}
	}

	angular.module('app').component('authenticationComponent', {
		controller: AuthenticationController
	});
}
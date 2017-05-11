angular
  .module('app')
  .run(run);

/** @ngInject */
function run(authenticationService: Services.IAuthenticationService, lock: any, $transitions: any, $state: any) {
	authenticationService.registerAuthenticationListener();
	lock.interceptHash();

	$transitions.onStart({ to: 'app' }, ($transitions: any) => {
		var newState = $transitions.$to();
        if (newState.data && newState.data.requiresLogin) {
        	if (!authenticationService.isAuthenticated()) {
        		$state.go('login');
        	}
        }
	});
}

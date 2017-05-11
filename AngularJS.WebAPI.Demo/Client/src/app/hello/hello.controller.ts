module Controllers {
	'use strict';

	export class HelloController {
		private apiData: string[];

		constructor(private $http: any) {
			this.initialise();
		}

		private initialise(): ng.IPromise<void> {
			return this.$http.get('http://localhost:10054/api/values/getall').then((response: ng.IHttpPromiseCallbackArg<string[]>) => {
				this.apiData = response.data;
			}).catch(() => {
				this.apiData = ['401 - Unauthorised access'];
			});
		}
	}
}

angular
	.module('app')
	.component('app', {
		templateUrl: 'app/hello/hello.html',
		controller: Controllers.HelloController,
		controllerAs: 'ctrl'
	});

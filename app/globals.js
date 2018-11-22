'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "santoshapro.me",
		api_url : 'https://santoshapro.me:88/api',
		api_refresh_interval: 5000,
		daemonPort : 38081,
		app_update_interval: 5*60000
	};
});
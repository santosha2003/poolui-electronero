'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "santoshapro.me",
		api_url : 'http://santoshapro.me:92/api',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});
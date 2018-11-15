'use strict';

app.controller('NetworkCtrl', function($scope, $route, dataService, timerService) {
	

	var loadData = function () {
		console.log("Getting Network Data");

		dataService.getData("/nework/stats", function(data){  // /network/chart/usdHash/60
			$scope.config = data;
			console.log(data);
		});

	};
	
	loadData();
	// timerService.register(loadData, $route.current.controller);

	// $scope.$on("$routeChangeStart", function () {
 //       timerService.remove($route.current.controller);
 //    });
});
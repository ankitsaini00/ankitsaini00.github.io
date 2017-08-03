app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
      $scope.show = 'msg1';
	$scope.toggle = function() {
	    $scope.show = $scope.show == 'msg1' ? 'msg2' : 'msg1';
	
	};     
});
}]);


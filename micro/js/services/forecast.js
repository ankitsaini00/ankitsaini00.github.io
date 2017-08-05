app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://randomuser.me/api/?result=50') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);


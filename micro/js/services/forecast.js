app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://randomuser.me/api/') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);


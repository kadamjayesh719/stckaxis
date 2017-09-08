angular.module('starter.services', [])

.service('Chats', function($http) {

    this.getData=function(){
      return $http({
          method : "POST",
          url : "https://stockaxis.com/Webservices/android/index.aspx?action=view&activity=changeintrend&cid=187166"
      }).then(function mySuccess(response) {
          var chats = response.data;
          return chats;
      }, function myError(response) {
          alert("No Data")
      });
    }
});

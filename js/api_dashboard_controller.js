console.log('api_dashboard_controller.js loaded!');

FAIL_RATE = 50 // 0-100% percent change that $http requests will fail

app.controller("ApiDashboardController", ApiDashboardController)

function ApiDashboardController($http){
  var vm = this;

  this.popular_endpoints = [
    "https://api.spotify.com/v1/search?q=never+gonna+give+you+up&type=track",
    "https://www.reddit.com/r/Rick_Astley/.json",
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=rick+astley"
  ];

  this.api_endpoint = ""; // user inputed url
  this.display_data = null; // JSON response data
  this.display_error = "";

  this.getEndpoint = function(){

    $http
      .get(this.api_endpoint)
      .then(
        function onSuccess(response){
          vm.display_error = "";
          vm.display_data = response.data;
        },

        function onError(error){
          vm.display_error = "Error - Request Failed"
          vm.display_data = null;
        }
      );

  }
}

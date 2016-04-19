console.log('api_dashboard_controller.js loaded!');

FAIL_RATE = 50;// 0-100% percent change that $http requests will fail

angular
  .module("promisingApp")
  .controller("ApiDashboardController", ApiDashboardController);

function ApiDashboardController($http){
  var vm = this;

  this.popular_endpoints = [
    "https://api.spotify.com/v1/search?q=never+gonna+give+you+up&type=track",
    "https://www.reddit.com/r/Rick_Astley/.json",
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=rick+astley"
  ];

  vm.api_endpoint = ""; // user inputed url
  vm.display_data = null; // JSON response data
  vm.pending = false;

  vm.getEndpoint = function(){
    this.pending = true;
    $http
      .get(vm.api_endpoint)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response) {
      vm.display_data=response.data;
      vm.pending = false;
    }
    function onGetError() {
      alert('there was an error');
      vm.pending = false;
    }
  };
}

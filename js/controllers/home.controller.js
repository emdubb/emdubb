(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("HomeController", HomeController);

  HomeController.$inject = ["$log", "$state"];

  function HomeController($log, $state) {
    var vm = this;
  }
})();

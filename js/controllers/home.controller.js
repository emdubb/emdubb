(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("HomeController", HomeController);

  HomeController.$inject = ["$log", "$state", "workDataService"];

  function HomeController($log, $state, workDataService) {
    var vm = this;
    vm.work = workDataService;
  }
})();

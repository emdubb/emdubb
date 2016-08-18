(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("WorkController", WorkController);

  WorkController.$inject = ["$log", "$state", "$stateParams", "$scope", "workDataService", "anchorSmoothScroll"];

  function WorkController($log, $state, $stateParams, $scope, workDataService, anchorSmoothScroll){
    var vm = this;

    vm.test = "test"
    $scope.$on("$stateChangeSuccess", function() {
      anchorSmoothScroll.scrollTo('top');
    })

    workDataService.forEach(function(work){
      if (work.id == $stateParams.id) {
        vm.work = work
      }
    })

  }
})()

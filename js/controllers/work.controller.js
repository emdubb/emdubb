(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("WorkController", WorkController);

  WorkController.$inject = ["$log", "$state", "$stateParams", "workDataService"];

  function WorkController($log, $state, $stateParams, workDataService){
    var vm = this;

    vm.test = "test"
    workDataService.forEach(function(work){
      if (work.id == $stateParams.id) {
        vm.work = work
      }
    })

  }
})()

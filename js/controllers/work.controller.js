(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("WorkController", WorkController);

  WorkController.$inject = ["$log", "$state"];

  function WorkController($log, $state){
    var vm = this;

    vm.test = "test"
  }
})()

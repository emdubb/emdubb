(function(){
  "use strict"

  angular
    .module("emdubb")
    .controller("HomeController", HomeController)
    .filter("workFilter", workFilter);

  HomeController.$inject = ["$log", "$state", "workDataService"];

  function HomeController($log, $state, workDataService) {
    var vm = this;
    vm.work = workDataService;
    vm.setGroup = setGroup;

    vm.selectedGroup = '';

    function setGroup(group) {
      if (group === 1) {
        vm.selectedGroup = "development";
      } else if (group === 2) {
        vm.selectedGroup = "interactive";
      } else if (group === 3) {
        vm.selectedGroup = "print";
      } else {
        vm.selectedGroup = "all";
      }
    }
  }

  workFilter.$inject = ["$log"];

  function workFilter($log){
    return function(values, category) {
      if(!category) {
        // initially don't filter
        return values;
      }
      // filter when we have a selected groupId
      return values.filter(function(value){
        if (category === "development") {
          return value.development === true;
        } else if (category === "interactive") {
          return value.interactive === true;
        } else if (category === "print") {
          return value.print === true;
        } else {
          return value;
        }
      });
    }
  }
})();

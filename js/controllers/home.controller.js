(function(){
  "use strict"

  angular
    .module("emdubb")
    .filter("workFilter", workFilter)
    .controller("HomeController", HomeController)
    .directive('resize', function ($window) {
      return function (scope, element, attr) {

        var w = angular.element($window);
        scope.$watch(function () {
          return {
            'h': window.innerHeight,
            'w': window.innerWidth
          };
      }, function (newValue, oldValue) {
          scope.windowHeight = newValue.h;
          scope.windowWidth = newValue.w;

          scope.resizeWithOffset = function (offsetH) {
            scope.$eval(attr.notifier);
            return {
                'height': (newValue.h - offsetH) + 'px'
            };
          };

      }, true);

        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });

  HomeController.$inject = ["$log", "$state", "$window", "$scope", "workDataService"];

  function HomeController($log, $state, $window, $scope, workDataService) {
    var vm = this;
    vm.work = workDataService;
    vm.setGroup = setGroup;
    vm.showWork = showWork;

    vm.selectedGroup = '';

    $scope.notifyServiceOnChange = function(){
    };

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

    function showWork(id){
      $state.go('work', {'id': id})
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

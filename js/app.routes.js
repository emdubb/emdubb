(function(){
  "use strict"

  angular
    .module('emdubb')
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home',{
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('work', {
        url: '/work/:id',
        templateUrl: 'templates/work.html',
        controller: 'WorkController',
        controllerAs: 'WorkCtrl'
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');
  }
})()

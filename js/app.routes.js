(function(){
  "use strict"

  angular
    .module('emdubb')
    .config(AppRoutes);

  AppRoutes = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home',{
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('river', {
        url: '/uptheriver',
        templateUrl: 'templates/river.html'
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');
  }
})()

(function(){
  "use strict"

  angular
    .module('emdubb')
    .config(AppRoutes);

  AppRoutes = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      // setup an abstract state for the menu directive
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })
      .state('app.home',{
        url: '/',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.river', {
        url: '/uptheriver',
        views: {
          'menuContent': {
            templateUrl: 'templates/river.html'
          }
        }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');
  }
})()

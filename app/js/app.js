var app = angular.module('AppSecurity', [
    'restangular',
    'ui.router',
    'loader',
    'ui.bootstrap',
    'serverSelect'
  ]);


app.config(['$stateProvider', '$provide', '$httpProvider', '$tooltipProvider', '$urlRouterProvider', function ( $stateProvider, $provide, $httpProvider, $tooltipProvider, $urlRouterProvider){


  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider
  .state('/', {
      url: '/',
      templateUrl: 'partials/mainview.html',
      controller: 'DocumentationViewCtrl'
  })
  ;

  $urlRouterProvider.otherwise('/');
  $tooltipProvider.options( {appendToBody: true} );
}]);




// app.run(['$rootScope', '$state', 'JobInputService', function ($rootScope, $state, JobInputService) {
//     // Run when route changes
//     $rootScope.$on("$stateChangeStart", function(event, curr, prev){
//           var job = JobInputService.CurrentJobData();
//           // Check .state config to determine if authentication is needed
//           // and if so check if User is authenticated
//           if (curr.checkForJob && angular.isUndefined(job)) {
//             // User isn’t authenticated
//             $state.go('/');
//             event.preventDefault();
//           }
//         });
//   }]);
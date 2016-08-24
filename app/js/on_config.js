function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Dashboard', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Contacts', {
    url: '/contacts',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Test'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

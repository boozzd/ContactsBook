function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Dashboard', {
    url: '/',
    controller: 'DashboardCtrl as dash',
    templateUrl: 'dashboard.html',
    title: 'Home'
  })
  .state('Contacts', {
    url: '/contacts',
    controller: 'ContactsCtrl as cnts',
    templateUrl: 'contacts.html',
    title: 'Contact List',
    resolve: {
      contacts: function(ContactsService, $timeout) {
        'ngInject';
        return $timeout(() => ContactsService.getAll());
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

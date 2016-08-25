describe('Unit: ContactsCtrl', function() {

  let ctrl, contacts;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');
    angular.mock.module(function($provide) {
      contacts = $provide.value('contacts',[{a: 1}]);
    });
    angular.mock.inject(($controller, $rootScope) => {
      let scope = $rootScope.$new();
      ctrl = $controller('ContactsCtrl', {
        $scope: scope,
        contacts: contacts
      });
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('shoud be queal', function() {
    expect(ctrl.perPage).toEqual(10);
  });

});

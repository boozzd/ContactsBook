describe('Unit: DashboardCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller) => {
      ctrl = $controller('DashboardCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

});

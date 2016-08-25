describe('Unit: ContactsService', function() {

  let http, service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(($httpBackend, ContactsService) => {
      http = $httpBackend;
      service = ContactsService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should retrieve data', function(done) {
    http.expect('GET', '/static/contacts.json').respond(201, [{data: 1234}]);

    service.getAll().then((result) => {
      expect(result).toEqual([{data: 1234}]);
    }).catch((error) => {
      expect(error).toBeUndefined();
    }).then(done);

    http.flush();
  });

  it('should save data', function(done) {
    var data = {firstName: 'test', lastName: 'test'};
    service.save(data).then(result => {
      expect(result.id).toMatch(/^[0-9]{1,9}$/);
    }).catch(error => {
      expect(error).toBeUndefined();
    }).then(done);
  });
});

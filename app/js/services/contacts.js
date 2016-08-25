function ContactsService($http, localStorageService) {
  'ngInject';

  const service = {};
  const key = 'contacts';

  service.getAll = function() {
    return new Promise((resolve, reject) => {
      const data = localStorageService.get(key);
      if (angular.isArray(data)) {
        return resolve(data);
      }
      $http.get('/static/contacts.json').success((data) => {
        if (angular.isArray(data)) {
          localStorageService.set(key, data);
          resolve(data);
        } else {
          const err = new TypeError('Incorrect type data. Must be an array');
          reject(err);
        }
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  service.get = function(id) {
    const data = localStorageService.get(key);
    return new Promise((resolve, reject) => {
      if (!angular.isArray(data)) {
        const err = new TypeError('Incorrect type data. Must be an array');
        reject(err);
      } else {
        resolve(data.filter(item => item.id === id)[0]);
      }
    });
  };

  service.save = function(data) {
    return service.getAll()
    .then(contacts => {
      const indexes = contacts.map(i => i.id);
      if (data.id && indexes.indexOf(data.id) >= 0) {
        contacts = contacts.map(i => (i.id === data.id) ? data : i);
      } else {
        data.id = Math.max.apply(this, indexes) + 1 || 1;
        contacts.push(data);
      }
      localStorageService.set(key, contacts);
      return data;
    });
  }

  return service;

}

export default {
  name: 'ContactsService',
  fn: ContactsService
};

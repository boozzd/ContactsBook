function ContactsCtrl(contacts) {
  'ngInject';
  // ViewModel
  const self = this;
  self.perPage = 10;
  self.contacts = contacts || [];
}

export default {
  name: 'ContactsCtrl',
  fn: ContactsCtrl
};

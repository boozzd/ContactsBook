function ContactCtrl(contact, ContactsService, $state) {
  'ngInject';
  // ViewModel
  const self = this;
  self.contact = contact || {};

  self.submit = (form) => {
    if (form.$valid) {
      ContactsService.save(self.contact)
      .then(() => $state.go('Contacts'));
    }
  }
  self.types = {
    'work': { title: 'Work', key: 'work', prefix: '+91', pattern: '+(91) 999-9999'},
    'home': { title: 'Personal', key: 'home', prefix: '+020', pattern: '+(020) 999-9999'},
  };
}

export default {
  name: 'ContactCtrl',
  fn: ContactCtrl
};

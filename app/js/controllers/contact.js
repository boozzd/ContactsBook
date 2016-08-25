function ContactCtrl(contact) {
  'ngInject';
  // ViewModel
  const self = this;
  self.contact = contact || {};
  self.removeItem = (type, index) => {
    if (!self.contact[type]) {
      self.contact[type] = [];
    }
    self.contact[type].splice(index, 1);
  }
  self.addItem = (type) => {
    if (!self.contact[type]) {
      self.contact[type] = [];
    }
    self.contact[type].push({});
  }
}

export default {
  name: 'ContactCtrl',
  fn: ContactCtrl
};

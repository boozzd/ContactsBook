function TypeList() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/typeList.html',
    scope: {
      placeholder: '@',
      title: '@',
      type: '@',
      types: '=',
      items: '=',
      form: '='
    },
    link: function (scope) {
      scope.inputType = (scope.type === 'email') ? 'email' : 'text';
    },
    controller: ['$scope', (scope) => {
      scope.addItem = () => {
        if (!Array.isArray(scope.items)) {
          scope.items = [];
        }
        scope.items.push({
          type: {
            key: scope.types.work.key,
            title: scope.types.work.title
          },
          value: ''
        });
        scope.changeAct(scope.items.length - 1);
      };
      scope.removeItem = (index) => {
        scope.items.splice(index, 1);
      };

      scope.changeAct = (index) => {
        const type = scope.types[scope.items[index].type.key];
        let value = scope.items[index].value;
        if (scope.type === 'phone') {
          if (value.length > 0) {
            value = Object.keys(scope.types).reduce((str, k) => {
              const reg = new RegExp(`^${escapeRegExp(scope.types[k].prefix)}`);
              return str.replace(reg, '');
            }, value);
          }
          scope.items[index].value = type.prefix + value;
        }
        scope.items[index].type.title = type.title;
      };
    }]
  };
}

const escapeRegExp = (str) => {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

export default {
  name: 'typeList',
  fn: TypeList
};

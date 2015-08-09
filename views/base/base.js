let React = require('react-native');

class BaseComponent extends React.Component {
  bindMethods(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
}

module.exports = BaseComponent;

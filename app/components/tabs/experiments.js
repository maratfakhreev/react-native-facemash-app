let React = require('react-native');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');
let Experiments = require('../experiments/experiments');

let { NavigatorIOS } = React;

class ExperimentsTab extends Base {
  render() {
    return (
      <NavigatorIOS
        style={ Styles.container }
        initialRoute={
          {
            title: 'Experiments',
            component: Experiments
          }
        }
      />
    );
  }
};

module.exports = ExperimentsTab;

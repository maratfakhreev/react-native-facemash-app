let React = require('react-native');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');
let Settings = require('../settings/settings');

let { NavigatorIOS } = React;

class SettingsTab extends Base {
  render() {
    return (
      <NavigatorIOS
        style={ Styles.container }
        initialRoute={
          {
            title: 'Settings',
            component: Settings
          }
        }
      />
    );
  }
};

module.exports = SettingsTab;

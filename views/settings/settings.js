let React = require('react-native');
let Base = require('../base/base');

let {
  Text,
  View
} = React;

class Settings extends Base {
  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
};

module.exports = Settings;

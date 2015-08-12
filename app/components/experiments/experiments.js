let React = require('react-native');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');

let {
  Text,
  View
} = React;

class Experiments extends Base {
  render() {
    return (
      <View style={ Styles.containerWithPadding }>
        <Text>Experiments</Text>
      </View>
    );
  }
};

module.exports = Experiments;

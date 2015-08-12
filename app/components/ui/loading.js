let React = require('react-native');
let Styles = require('../../styles/ui/loading');
let Base = require('../base/base');

let {
  ActivityIndicatorIOS,
  Text,
  View
} = React;

class Loading extends Base {
  render() {
    return (
      <View style={ Styles.loading }>
        <Text style={ Styles.loadingText }>Loading</Text>
        <ActivityIndicatorIOS />
      </View>
    )
  }
}

module.exports = Loading;

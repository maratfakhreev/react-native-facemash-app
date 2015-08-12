let React = require('react-native');
let Emitter = require('../../emitters/emitter');
let Dispatcher = require('../../dispatchers/dispatcher');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');

let {
  SwitchIOS,
  Text,
  View
} = React;

class Settings extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      switchValue: false
    };

    this.bindMethods('onSave');
  }

  componentDidMount() {
    Emitter.on('username:get', (value) => {
      if (this.state.switchValue !== value) {
        this.setState({ 'switchValue': value });
      }
    });
  }

  onSave(value) {
    this.setState({ switchValue: value });
    Dispatcher.dispatch({
      type: 'username:update',
      content: { value }
    });
  }

  render() {
    Dispatcher.dispatch({ type: 'username:get' });

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={ Styles.containerWithPadding }>
          <Text>Hide user's last name</Text>
          <SwitchIOS
            onValueChange={ this.onSave }
            value={ this.state.switchValue }
          />
        </View>
      </View>
    );
  }
};

module.exports = Settings;

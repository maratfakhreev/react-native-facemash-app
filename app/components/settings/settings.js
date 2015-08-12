let React = require('react-native');
let Emitter = require('../../emitters/emitter');
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
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={ Styles.containerWithPadding }>
          <Text>Hide user's last name</Text>
          <SwitchIOS
            onValueChange={ (value) => {
              this.setState({ switchValue: value });
              Emitter.emit('setSettings', value);
            } }
            value={ this.state.switchValue }
          />
        </View>
      </View>
    );
  }
};

module.exports = Settings;

let React = require('react-native');
let SettingsModel = require('../../models/settings');
let StylesContainer = require('../../styles/main/container');
let StylesSettings = require('../../styles/settings/settings');
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
      hasUsername: false,
      hasScores: false
    };

    this.bindMethods('onChangeUsernameSetting', 'onChangeScoresSetting');
  }

  settings() {
    SettingsModel.getUsername().then((value) => {
      if (this.state.hasUsername !== value) {
        this.setState({ 'hasUsername': value });
      }
    });
    SettingsModel.getScores().then((value) => {
      if (this.state.hasScores !== value) {
        this.setState({ 'hasScores': value });
      }
    });
  }

  onChangeUsernameSetting(value) {
    this.setState({ hasUsername: value });
    SettingsModel.updateUsername(value);
  }

  onChangeScoresSetting(value) {
    this.setState({ hasScores: value });
    SettingsModel.updateScores(value);
  }

  render() {
    this.settings();

    return (
      <View style={ StylesContainer.containerSecond }>
        <View style={ StylesSettings.row }>
          <Text style={ StylesSettings.label }>Show user's fullname</Text>
          <SwitchIOS
            style={ StylesSettings.switcher }
            onValueChange={ this.onChangeUsernameSetting }
            value={ this.state.hasUsername }
          />
        </View>
        <View style={ StylesSettings.row }>
          <Text style={ StylesSettings.label }>Show user's scores</Text>
          <SwitchIOS
            style={ StylesSettings.switcher }
            onValueChange={ this.onChangeScoresSetting }
            value={ this.state.hasScores }
          />
        </View>
      </View>
    );
  }
};

module.exports = Settings;

let React = require('react-native');
let SettingsModel = require('../../models/settings');
let Styles = require('../../styles/users/user');
let Base = require('../base/base');

let {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

class User extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      'hasUsername': false,
      'hasScores': false
    };
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

  renderUsername(user) {
    let username = user.firstName;

    if (this.state.hasUsername) {
      username += ` ${user.lastName}`;
    }

    return username;
  }

  renderUserscore(user) {
    if (this.state.hasScores) {
      return (
        <View style={ Styles.userScoreContainer }>
          <View style={ Styles.userScore }>
            <Text style={ Styles.userScoreHeader }>
              WON
            </Text>
            <Text style={ [Styles.userScoreValue, Styles.won] }>
              { user.won }
            </Text>
          </View>
          <View style={ Styles.userScore }>
            <Text style={ Styles.userScoreHeader }>
              LOST
            </Text>
            <Text style={ [Styles.userScoreValue, Styles.lost] }>
              { user.lost }
            </Text>
          </View>
          <View style={ Styles.userScore }>
            <Text style={ Styles.userScoreHeader }>
              SCORE
            </Text>
            <Text style={ Styles.userScoreValue }>
              { user.score }
            </Text>
          </View>
        </View>
      );
    }
  }

  render() {
    let user = this.props.user;
    this.settings();

    return (
      <View style={ Styles.user }>
        <Image
          style={ Styles.userImage }
          source={ { uri: user.picture } }
        />
        <TouchableHighlight onPress={ this.props.onPressUser }>
          <View style={ Styles.userInfo }>
            <Text style={ Styles.userName }>
              { this.renderUsername(user) }
            </Text>
            { this.renderUserscore(user) }
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = User;

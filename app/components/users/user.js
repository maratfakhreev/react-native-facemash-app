let React = require('react-native');
let Emitter = require('../../emitters/emitter');
let Dispatcher = require('../../dispatchers/dispatcher');
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
      'hasUsername': false
    };
  }

  componentDidMount() {
    Emitter.on('username:get', (value) => {
      if (this.state.hasUsername !== value) {
        this.setState({ 'hasUsername': value });
      }
    });
  }

  userPresenter(user) {
    let username = user.firstName;

    if (this.state.hasUsername === true) {
      username += ` ${user.lastName}`;
    }

    return username;
  }

  render() {
    Dispatcher.dispatch({ type: 'username:get' });
    let user = this.props.user;

    return (
      <View style={ Styles.user }>
        <Image
          style={ Styles.userImage }
          source={ { uri: user.picture } }
        />
        <TouchableHighlight onPress={ this.props.onPressUser }>
          <View style={ Styles.userInfo }>
            <Text style={ Styles.userName }>
              { this.userPresenter(user) }
            </Text>
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
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = User;

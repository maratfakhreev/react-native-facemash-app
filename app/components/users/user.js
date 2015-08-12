let React = require('react-native');
let Styles = require('../../styles/users/user');
let Base = require('../base/base');

let {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

class User extends Base {
  render() {
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
              { user.firstName } { user.lastName }
              { this.props.index }
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

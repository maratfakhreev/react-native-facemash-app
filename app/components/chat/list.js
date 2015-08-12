let React = require('react-native');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');

let {
  Text,
  View
} = React;

class ChatList extends Base {
  render() {
    let user = this.props.user;

    return (
      <View style={ Styles.containerWithPadding }>
        <Text>Chat with { user.firstName } { user.lastName }</Text>
      </View>
    );
  }
};

module.exports = ChatList;

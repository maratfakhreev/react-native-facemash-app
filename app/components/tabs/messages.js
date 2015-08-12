let React = require('react-native');
let Styles = require('../../styles/main/container');
let Base = require('../base/base');
let MessagesList = require('../messages/list');

let { NavigatorIOS } = React;

class MessagesTab extends Base {
  render() {
    return (
      <NavigatorIOS
        style={ Styles.container }
        initialRoute={
          {
            title: 'Messages',
            component: MessagesList
          }
        }
      />
    );
  }
};

module.exports = MessagesTab;

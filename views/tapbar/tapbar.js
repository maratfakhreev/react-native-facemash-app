let React = require('react-native');
let Styles = require('../../styles/tapbar/tapbar');
let FaceMashTab = require('../tabs/facemash');

let {
  Text,
  View,
  TabBarIOS,
  StatusBarIOS
} = React;

class Facemash extends React.Component {
  constructor(...props) {
    super(...props);

    this.buttons = [
      'faceMash',
      'messages',
      'settings'
    ];

    this.state = {
      selectedTab: this.buttons[0]
    };
  }

  changeTab(selectedTab) {
    StatusBarIOS.setStyle(selectedTab === this.buttons[0] ? 1 : 0);
    this.setState({ selectedTab });
  }

  isSelectedTab(selectedTab) {
    return this.state.selectedTab === selectedTab;
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='FaceMash'
          icon={ require('image!settings') }
          onPress={ () => this.changeTab(this.buttons[0]) }
          selected={ this.isSelectedTab(this.buttons[0]) }>
          <FaceMashTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Messages'
          icon={ require('image!settings') }
          onPress={ () => this.changeTab(this.buttons[1]) }
          selected={ this.isSelectedTab(this.buttons[1]) }>
          <View style={ Styles.pageView }>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Settings'
          icon={ require('image!settings') }
          onPress={ () => this.changeTab(this.buttons[2]) }
          selected={ this.isSelectedTab(this.buttons[2]) }>
          <View style={ Styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = Facemash;

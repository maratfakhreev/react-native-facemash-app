let React = require('react-native');
let Base = require('../base/base');
let FaceMashTab = require('../tabs/facemash');
let MessagesTab = require('../tabs/messages');
let ExperimentsTab = require('../tabs/experiments');
let SettingsTab = require('../tabs/settings');

let {
  TabBarIOS,
  StatusBarIOS
} = React;

class Facemash extends Base {
  constructor(...props) {
    super(...props);

    this.buttons = [
      'faceMash',
      'messages',
      'experiment',
      'settings'
    ];

    this.state = {
      selectedTab: this.buttons[0]
    };
  }

  componentWillMount() {
    StatusBarIOS.setStyle(1);
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
          icon={ require('image!facemash') }
          onPress={ () => this.changeTab(this.buttons[0]) }
          selected={ this.isSelectedTab(this.buttons[0]) }
        >
          <FaceMashTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Messages'
          icon={ require('image!messages') }
          onPress={ () => this.changeTab(this.buttons[1]) }
          selected={ this.isSelectedTab(this.buttons[1]) }
        >
          <MessagesTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Experiments'
          icon={ require('image!experiment') }
          onPress={ () => this.changeTab(this.buttons[2]) }
          selected={ this.isSelectedTab(this.buttons[2]) }
        >
          <ExperimentsTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Settings'
          icon={ require('image!settings') }
          onPress={ () => this.changeTab(this.buttons[3]) }
          selected={ this.isSelectedTab(this.buttons[3]) }
        >
          <SettingsTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = Facemash;

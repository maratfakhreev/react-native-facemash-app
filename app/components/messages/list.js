let React = require('react-native');
let Styles = require('../../styles/main/container');
let Messages = require('../../models/messages');
let Base = require('../base/base');
let Message = require('../messages/item');
let Loading = require('../ui/loading');

let {
  ListView,
  ScrollView,
  Text,
  View
} = React;

class MessagesList extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      messages: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };

    this.bindMethods('renderRow');
  }

  componentWillMount() {
    let messages = new Messages();
    messages.fetch().then(messages => this.updateDataSource(messages));
  }

  updateDataSource(messages) {
    this.setState({
      messages,
      dataSource: this.state.dataSource.cloneWithRows(messages)
    });
  }

  renderRow(user) {
    return (
      <Message data={ user } nav={ this.props.navigator }/>
    );
  }

  render() {
    let { messages } = this.state;

    if (!messages.length) {
      return (
        <Loading />
      )
    }

    return (
      <View style={ Styles.container }>
        <ScrollView
          contentContainerStyle={ Styles.scrollContainer }
          automaticallyAdjustContentInsets={ false }
          contentInset={ { bottom: 50 } }
        >
          <ListView
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }
          />
        </ScrollView>
      </View>
    );
  }
};

module.exports = MessagesList;

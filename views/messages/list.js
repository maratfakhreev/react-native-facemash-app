let React = require('react-native');
let Styles = require('../../styles/tabs/facemash');
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
  }

  componentWillMount() {
    fetch('http://localhost:8882/rest/messages')
      .then(res => res.json())
      .then(res => this.updateDataSource(res));
  }

  updateDataSource(data) {
    this.setState({
      messages: data,
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  }

  renderRow(person) {
    return (
      <Message data={ person }/>
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
          contentContainerStyle={ Styles.contentContainer }
          contentInset={ { top: -60 } }
        >
          <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
        </ScrollView>
      </View>
    );
  }
};

module.exports = MessagesList;

let React = require('react-native');
let Styles = require('../../styles/tabs/facemash');
let Person = require('../persons/person');

let {
  ActivityIndicatorIOS,
  Text,
  View
} = React;

class FacemashTab extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      list: [],
      currentIndex: 0
    };
  }

  componentWillMount() {
    fetch('http://localhost:8882/rest/mash')
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  }

  renderContents() {
    let { list, currentIndex } = this.state;

    if (!list.length) {
      return (
        <View style={ Styles.loading }>
          <Text style={ Styles.loadingText }>Loading</Text>
          <ActivityIndicatorIOS />
        </View>
      )
    }
    else {
      let record = list[currentIndex];
      let people = record.users.map(function(person) {
        return (
          <Person person={ person } index={ currentIndex } />
        );
      });

      return (
        <View>
          { people }
        </View>
      )
    }
  }

  render() {
    return (
      <View style={ Styles.container }>
        <View style={ Styles.header }>
          <Text style={ Styles.headerText }>FaceMash</Text>
        </View>
        { this.renderContents() }
      </View>
    );
  }
};

module.exports = FacemashTab;

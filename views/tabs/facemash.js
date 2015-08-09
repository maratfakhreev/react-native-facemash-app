let React = require('react-native');
let Styles = require('../../styles/tabs/facemash');
let Base = require('../base/base');
let Person = require('../persons/person');

let {
  ActivityIndicatorIOS,
  ScrollView,
  Text,
  View
} = React;

class FacemashTab extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      list: [],
      currentIndex: 0
    };

    this.bindMethods('onPressPerson');
  }

  componentWillMount() {
    fetch('http://localhost:8882/rest/mash')
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  }

  onPressPerson() {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
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
      let people = record.users.map((person) => {
        return (
          <Person person={ person } onPressPerson={ this.onPressPerson } />
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
        <ScrollView
          contentContainerStyle={ Styles.contentContainer }
          contentInset={ { top: -20 } }
        >
          { this.renderContents() }
        </ScrollView>
      </View>
    );
  }
};

module.exports = FacemashTab;

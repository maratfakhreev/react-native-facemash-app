let React = require('react-native');
let Styles = require('../../styles/tabs/facemash');

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
    if (!this.state.list.length) {
      return (
        <View style={ Styles.loading }>
          <Text style={ Styles.loadingText }>Loading</Text>
          <ActivityIndicatorIOS />
        </View>
      )
    }
    else {
      return (
        <View style={ Styles.content }>
          <Text>Loaded</Text>
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

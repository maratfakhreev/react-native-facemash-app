let React = require('react-native');
let StylesContainer = require('../../styles/main/container');
let StylesFacemash = require('../../styles/tabs/facemash');
let Mashes = require('../../models/mashes');
let Base = require('../base/base');
let User = require('../users/user');
let Loading = require('../ui/loading');

let {
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

    this.bindMethods('onPressUser');
  }

  componentWillMount() {
    let mashes = new Mashes();
    mashes.fetch().then(list => this.setState({ list }));
  }

  onPressUser() {
    if (this.state.currentIndex !== this.state.list.length - 1) {
      this.setState({ currentIndex: ++this.state.currentIndex });
    }
  }

  renderContents() {
    let { list, currentIndex } = this.state;

    if (!list.length) {
      return (
        <Loading />
      )
    }

    {
      let record = list[currentIndex];
      let people = record.users.map((user) => {
        return (
          <User user={ user } onPressUser={ this.onPressUser } />
        );
      });

      return (
        <View>{ people }</View>
      )
    }
  }

  render() {
    return (
      <View style={ StylesContainer.container }>
        <View style={ StylesFacemash.header }>
          <Text style={ StylesFacemash.headerText }>FaceMash</Text>
        </View>
        <ScrollView
          contentContainerStyle={ StylesContainer.scrollContainer }
          automaticallyAdjustContentInsets={ false }
          contentInset={ { bottom: 70 } }
          showsVerticalScrollIndicator={ true }
        >
          { this.renderContents() }
        </ScrollView>
      </View>
    );
  }
};

module.exports = FacemashTab;

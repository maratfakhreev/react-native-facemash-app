let React = require('react-native');
let Styles = require('../../styles/persons/person');
let Base = require('../base/base');

let {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

class Person extends Base {
  render() {
    let person = this.props.person;

    return (
      <View style={ Styles.person }>
        <Image
          style={ Styles.personImage }
          source={ { uri: person.picture } }
        />
        <TouchableHighlight onPress={ this.props.onPressPerson }>
          <View style={ Styles.personInfo }>
            <Text style={ Styles.personName }>
              { person.firstName } { person.lastName }
              { this.props.index }
            </Text>
            <View style={ Styles.personScore }>
              <Text style={ Styles.personScoreHeader }>
                WON
              </Text>
              <Text style={ [Styles.personScoreValue, Styles.won] }>
                { person.won }
              </Text>
            </View>
            <View style={ Styles.personScore }>
              <Text style={ Styles.personScoreHeader }>
                LOST
              </Text>
              <Text style={ [Styles.personScoreValue, Styles.lost] }>
                { person.lost }
              </Text>
            </View>
            <View style={ Styles.personScore }>
              <Text style={ Styles.personScoreHeader }>
                SCORE
              </Text>
              <Text style={ Styles.personScoreValue }>
                { person.score }
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Person;

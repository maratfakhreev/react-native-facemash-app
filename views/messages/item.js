let React = require('react-native');
let Styles = require('../../styles/messages/item');
let Base = require('../base/base');

let {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

class MessageItem extends Base {
  prettyTime(timestamp) {
    let str;
    let createdDate = new Date(timestamp);
    let distance = Math.round( ( +new Date() - timestamp ) / 60000 );
    let hours = ('0' + createdDate.getHours()).slice(-2);
    let minutes = ('0' + createdDate.getMinutes()).slice(-2);
    let month = ('0' + (createdDate.getMonth() + 1)).slice(-2);
    let date = ('0' + createdDate.getDate()).slice(-2);
    let year = createdDate.getFullYear();

    if (distance < 1440) {
      str = [hours, minutes].join(':');
    }
    else if (distance < 2879) {
      str = 'Yesterday';
    }
    else {
      str = [date, month, year].join('/');
    }

    return str;
  }

  render() {
    let data = this.props.data;
    let time = this.prettyTime(data.lastMessage.timestamp);

    return (
      <View>
        <TouchableHighlight>
          <View>
            <View style={ Styles.row }>
              <Image
                source={ { uri: data.user.picture } }
                style={ Styles.cellImage }
                />
              <View style={ Styles.textContainer }>
                <Text style={ Styles.name } numberOfLines={ 1 }>
                  { data.user.firstName } { data.user.lastName }
                </Text>
                <Text style={ Styles.time } numberOfLines={ 1 }>
                  { time }
                </Text>
                <Text style={ Styles.lastMessage } numberOfLines={ 1 }>
                  { data.lastMessage.contents }
                </Text>
              </View>
            </View>
            <View style={ Styles.cellBorder } />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = MessageItem;

let React = require('react-native');
let Styles = require('../../styles/messages/item');
let Base = require('../base/base');
let ChatList = require('../chat/list');

let {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

class MessageItem extends Base {
  constructor(...props) {
    super(...props);

    this.bindMethods('onOpenChat');
  }

  datePresenter(date) {
    return (`0${date}`).slice(-2);
  }

  prettyTime(timestamp) {
    let str;
    let createdDate = new Date(timestamp);
    let timeDistance = Math.round((+new Date() - timestamp) / 60000);
    let hours = this.datePresenter(createdDate.getHours());
    let minutes = this.datePresenter(createdDate.getMinutes());
    let month = this.datePresenter(createdDate.getMonth());
    let date = this.datePresenter(createdDate.getDate());
    let year = createdDate.getFullYear();

    if (timeDistance < 1440) {
      str = [hours, minutes].join(':');
    }
    else if (timeDistance < 2879) {
      str = 'Yesterday';
    }
    else {
      str = [date, month, year].join('/');
    }

    return str;
  }

  onOpenChat(user) {
    this.props.nav.push({
      title: `${user.firstName} ${user.lastName}`,
      component: ChatList,
      passProps: { user }
    });
  }


  render() {
    let data = this.props.data;
    let time = this.prettyTime(data.lastMessage.timestamp);

    return (
      <View>
        <TouchableHighlight onPress={ () => this.onOpenChat(data.user) }>
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

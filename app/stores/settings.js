let React = require('react-native');
let Emitter = require('../emitters/emitter');
let Dispatcher = require('../dispatchers/dispatcher');

let { AsyncStorage } = React;

class SettingsStore {
  constructor() {
    Dispatcher.register((payload) => {
      switch (payload.type) {
        case 'username:get':
          this.getUsername();
          break;
        case 'username:update':
          this.updateUsername(payload.content);
          break;
      }
    });
  }

  getUsername() {
    AsyncStorage.getItem('username').then((value) => {
      if (value === null) {
        value = false;
      }
      else {
        value = (value === 'true') ? true : false;
      }

      Emitter.emit('username:get', value);
    });
  }

  updateUsername(content) {
    let value = content.value ? 'true' : 'false';
    AsyncStorage.setItem('username', value);
  }
}

module.exports = new SettingsStore()

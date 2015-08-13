let React = require('react-native');

let { AsyncStorage } = React;

function getBoolean(value) {
  return (value === 'true') ? true : false;
}

function setBoolean(value) {
  return value ? 'true' : 'false';
}

class Settings {
  static getUsername() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('username').then((value) => {
        resolve(getBoolean.call(this, value));
      });
    });
  }

  static getScores() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('scores').then((value) => {
        resolve(getBoolean.call(this, value));
      });
    });
  }

  static updateUsername(value) {
    AsyncStorage.setItem('username', setBoolean.call(this, value));
  }

  static updateScores(value) {
    AsyncStorage.setItem('scores', setBoolean.call(this, value));
  }
}

module.exports = Settings;

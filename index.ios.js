let React = require('react-native');
let SettingsStore = require('./app/stores/settings');
let Facemash = require('./app/components/tapbar/tapbar');

let { AppRegistry } = React;

AppRegistry.registerComponent('facemash', () => Facemash);

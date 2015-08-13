let StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  row: {
    height: 50,
    flexDirection: 'row',
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    padding: 10
  },
  label: {
    flex: 1,
    top: 5
  },
  switcher: {
    justifyContent: 'flex-end'
  }
});

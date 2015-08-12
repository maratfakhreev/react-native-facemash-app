let StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerWithPadding: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 70
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 0
  }
});

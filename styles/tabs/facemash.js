let StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 14,
    marginBottom: 20
  },
  header: {
    height: 50,
    backgroundColor: '#ff0000',
    paddingTop: 20,
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  }
});

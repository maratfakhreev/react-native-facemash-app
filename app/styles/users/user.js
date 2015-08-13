let StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  user: {
    flex: 1,
    margin: 10,
    borderRadius: 3,
    overflow: 'hidden'
  },
  userInfo: {
    backgroundColor: '#fff',
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40
  },
  userImage: {
    flex: 1,
    height: 200
  },
  userName: {
    fontSize: 18,
    flex: 0.6,
    paddingLeft: 5,
    overflow: 'hidden'
  },
  userScoreContainer: {
    flex: 0.4,
    flexDirection: 'row'
  },
  userScore: {
    flex: 0.33,
    alignItems: 'center'
  },
  userScoreHeader: {
    color: 'rgba( 0, 0, 0, 0.3 )',
    fontSize: 10,
    fontWeight: 'bold'
  },
  userScoreValue: {
    color: 'rgba( 0, 0, 0, 0.6 )',
    fontSize: 15
  },
  won: {
    color: '#93C26D'
  },
  lost: {
    color: '#DD4B39'
  }
});

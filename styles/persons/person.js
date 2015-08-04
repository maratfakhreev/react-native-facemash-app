let StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  person: {
    flex: 1,
    margin: 10,
    borderRadius: 3,
    overflow: 'hidden'
  },
  personInfo: {
    backgroundColor: '#fff',
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  personImage: {
    flex: 1,
    height: 200
  },
  personName: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 5
  },
  personScore: {
    flex: 0.25,
    alignItems: 'center'
  },
  personScoreHeader: {
    color: 'rgba( 0, 0, 0, 0.3 )',
    fontSize: 10,
    fontWeight: 'bold'
  },
  personScoreValue: {
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

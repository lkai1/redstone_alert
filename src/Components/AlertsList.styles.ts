import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height - 120,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  alertListContainer: {
    width: '100%',
    marginTop: 20,
  },
  alertContainer: {
    alignSelf: 'center',
    width: '90%',
    margin: 10,
    backgroundColor: 'rgba(20, 20, 20, 0.5)',
    borderRadius: 5,
    padding: 15,
  },
  deleteAlertIcon: {
    alignSelf: 'flex-start',
    color: '#696969',
    fontSize: 35,
  },
  alertHeaderText: {
    color: 'rgb(200, 200, 200)',
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  alertTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  alertTitleText: {
    color: 'rgb(120, 120, 120)',
    fontSize: 14,
  },
  alertText: {
    color: 'rgb(160, 160, 160)',
    fontSize: 16,
  },
});

export default styles;

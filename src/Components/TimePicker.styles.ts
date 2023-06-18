import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: 'black',
    width: '100%',
  },
  navButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    color: '#696969',
    fontSize: 35,
    margin: 10,
  },
  closeTimePickerIcon: {
    alignSelf: 'flex-end',
    color: '#696969',
    fontSize: 35,
    margin: 10,
  },
  timeSelectionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedTimeTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  selectedTimeText: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: '#696969',
  },
  timeButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: 'rgb(45, 45, 45)',
  },
  timeButton: {
    width: 50,
    backgroundColor: '#303030',
    margin: 5,
    borderRadius: 3,
  },
  timeButtonText: {
    fontSize: 16,
    color: '#eeeeee',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

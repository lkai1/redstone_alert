import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  datePickerContentContainer: {
    backgroundColor: 'black',
    width: '100%',
  },
  closeDatePickerIcon: {
    alignSelf: 'flex-end',
    color: '#696969',
    fontSize: 35,
    margin: 10,
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    color: '#ec1d0b',
    fontSize: 30,
    padding: 0,
    marginTop: 10,
    marginBottom: 5,
  },
  calendarHeader: {
    fontSize: 16,
  },
});

export default styles;

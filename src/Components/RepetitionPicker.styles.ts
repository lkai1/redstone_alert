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
    justifyContent: 'flex-end',
  },
  closeRepetitionPickerIcon: {
    alignSelf: 'flex-end',
    color: '#696969',
    fontSize: 35,
    margin: 10,
  },
  selectionButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#303030',
  },
  selectionButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#eeeeee',
    fontWeight: 'bold',
  },
});

export default styles;

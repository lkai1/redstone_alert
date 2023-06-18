import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: 'black',
  },
  backgroundImageContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backgroundImage: {
    height: 140,
  },
  openAddAlertMenuButton: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ec1d0b',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 15,
    marginBottom: 40,
    position: 'absolute',
    bottom: 0,
  },
  openAddAlertMenuButtonText: {
    fontSize: 16,
    color: 'rgb(230, 230, 230)',
    fontWeight: 'bold',
  },
  openAddAlertMenuButtonIcon: {
    fontSize: 22,
    marginLeft: 5,
    color: 'rgb(230, 230, 230)',
    fontWeight: 'bold',
  },
});

export default styles;

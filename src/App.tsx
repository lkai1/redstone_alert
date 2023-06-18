/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './App.styles';
import AddAlertMenu from './Components/AddAlertMenu';
import AlertsList from './Components/AlertsList';
import db from './data/database';
import { Alert } from './types/interfaces';
import notifee from '@notifee/react-native';

const App = () => {
  /*
  1. fix push notifications
  2. test on different screens and sideways(might be a problem)
  3. test fonts
  4. check if firebase settings is needed (push notifications documentation)
  5. fix notification must be in the future error by validation
  6. cancel notifications when deleting alert
  */
  const [addAlertMenuVisibility, setAddAlertMenuVisibility] = useState(false);
  const [alerts, setAlerts] = useState<Alert[] | []>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    notifee.requestPermission();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await db.getAlerts();
      console.log(data);
      setAlerts(data);
    };
    getData();
  }, [update]);

  return (
    <View style={styles.main}>
      <View style={styles.backgroundImageContainer}>
        <Image
          style={styles.backgroundImage}
          source={require('./images/background_img.png')}
        />
      </View>
      <AlertsList
        alerts={alerts}
        updateAlerts={() => { setUpdate(!update); }} />
      <AddAlertMenu
        visibility={addAlertMenuVisibility}
        setVisibility={setAddAlertMenuVisibility}
        updateAlerts={() => { setUpdate(!update); }} />
      <TouchableOpacity
        style={styles.openAddAlertMenuButton}
        onPress={() => {
          setAddAlertMenuVisibility(!addAlertMenuVisibility);
        }}>
        <Text style={styles.openAddAlertMenuButtonText}>Lisää hälytys</Text>
        <MaterialIcons
        name="add-circle-outline"
        style={styles.openAddAlertMenuButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

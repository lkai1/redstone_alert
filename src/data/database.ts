import AsyncStorage from '@react-native-async-storage/async-storage';
import {NewAlert} from '../types/interfaces';

const db = {
  createAlert: async (
    value: NewAlert,
    notificationIds: {reminderNotification: string; notification: string},
  ) => {
    try {
      const data = await AsyncStorage.getItem('@RedStone_Alert');
      const alerts = data === null ? [] : JSON.parse(data);
      alerts.push({
        ...value,
        notificationIds,
        id: alerts[alerts.length - 1]?.id
          ? alerts[alerts.length - 1].id + 1
          : 1,
      });
      await AsyncStorage.setItem('@RedStone_Alert', JSON.stringify(alerts));
    } catch (e) {
      // saving error
    }
  },
  getAlerts: async () => {
    try {
      const data = await AsyncStorage.getItem('@RedStone_Alert');
      return data === null ? [] : JSON.parse(data);
    } catch (e) {
      // error reading value
    }
  },
  deleteAlert: async (id: number) => {
    try {
      const data = await AsyncStorage.getItem('@RedStone_Alert');
      const alerts = data === null ? [] : JSON.parse(data);
      const filteredAlerts = alerts.filter((alert: any) => alert.id !== id);
      await AsyncStorage.setItem(
        '@RedStone_Alert',
        JSON.stringify(filteredAlerts),
      );
    } catch (e) {
      // error reading value
    }
  },
};

export default db;

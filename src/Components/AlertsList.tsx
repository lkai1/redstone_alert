import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './AlertsList.styles';
import {Alert} from '../types/interfaces';
import getUniqueKey from '../utils/uniqueKey';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import db from '../data/database';
import getFinDateFormat from '../utils/dateFormat';
import notifications from '../lib/notifications';

interface Props {
  alerts: Alert[];
  updateAlerts: () => void;
}
const AlertsList = ({alerts, updateAlerts}: Props) => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.alertListContainer}>
        {alerts.map((alert, i: number) => {
          return (
            <View key={getUniqueKey('alert', i)} style={styles.alertContainer}>
              <MaterialIcons
                style={styles.deleteAlertIcon}
                name="close"
                onPress={async () => {
                  notifications.cancelNotification(alert);
                  await db.deleteAlert(alert.id);
                  updateAlerts();
                }}
              />
              <Text style={styles.alertHeaderText}>{alert.header}</Text>
              <View style={styles.alertTextContainer}>
                <View>
                  <Text style={styles.alertTitleText}>Pvm:</Text>
                  <Text style={styles.alertText}>
                    {getFinDateFormat(alert.date)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.alertTitleText}>Klo:</Text>
                  <Text style={styles.alertText}>
                    {alert.time.hour}:{alert.time.minute}
                  </Text>
                </View>
              </View>
              <View style={styles.alertTextContainer}>
                <View>
                  <Text style={styles.alertTitleText}>Muistutus:</Text>
                  <Text style={styles.alertText}>{alert.reminder}</Text>
                </View>
                <View>
                  <Text style={styles.alertTitleText}>Toisto:</Text>
                  <Text style={styles.alertText}>{alert.repetition}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default AlertsList;

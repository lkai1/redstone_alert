/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Dispatch, SetStateAction, useState} from 'react';
import {TextInput, View, TouchableOpacity, Text, Modal} from 'react-native';
import styles from './AddAlertMenu.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import ReminderPicker from './ReminderPicker';
import RepetitionPicker from './RepetitionPicker';
import getFinDateFormat from '../utils/dateFormat';
import db from '../data/database';
import validateNewAlert from '../utils/validation';
import {NewAlert} from '../types/interfaces';
import notifications from '../lib/notifications';

interface Props {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  updateAlerts: () => void;
}

const AddAlertMenu = ({visibility, setVisibility, updateAlerts}: Props) => {
  //find out how to copy image from tab
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [timePickerVisibility, setTimePickerVisibility] = useState(false);
  const [reminderPickerVisibility, setReminderPickerVisibility] =
    useState(false);
  const [repetitionPickerVisibility, setRepetitionPickerVisibility] =
    useState(false);
  const [validationNotification, setValidationNotification] = useState('');

  const emptyAlert = {
    header: '',
    date: '',
    time: {hour: '', minute: ''},
    reminder: '',
    repetition: '',
  };

  const [newAlert, setNewAlert] = useState(emptyAlert);

  const handleNewAlertChange = (
    key: string,
    value: NewAlert['time'] | string,
  ) => {
    setNewAlert(prevState => {
      return {...prevState, ...{[key]: value}};
    });
  };

  const handleNewAlertCreate = async (value: NewAlert) => {
    if (validateNewAlert(value)) {
      const notificationIds = await notifications.createNotification(value);
      await db.createAlert(value, notificationIds);
      updateAlerts();
      setVisibility(false);
      setNewAlert(emptyAlert);
      setValidationNotification('');
    } else {
      setValidationNotification('Täytä kaikki tiedot');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        setVisibility(false);
      }}>
      <View style={[styles.main]}>
        <View style={styles.addAlertMenuContentContainer}>
          <View>
            <MaterialIcons
              name="close"
              style={styles.closeAddAlertMenuIcon}
              onPress={() => {
                setVisibility(false);
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Hälytyksen otsikko"
              placeholderTextColor="rgb(100,100,100)"
              onChangeText={value => {
                handleNewAlertChange('header', value);
              }}
              value={newAlert.header}
            />
            <View style={styles.addAlertMenuButtonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDatePickerVisibility(true);
                }}>
                <Text style={styles.buttonText}>Päivämäärä</Text>
                <MaterialIcons name="event" style={styles.buttonIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setTimePickerVisibility(true);
                }}>
                <Text style={styles.buttonText}>Kellonaika</Text>
                <MaterialIcons name="schedule" style={styles.buttonIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setReminderPickerVisibility(true);
                }}>
                <Text style={styles.buttonText}>Muistutus</Text>
                <MaterialIcons name="alarm" style={styles.buttonIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setRepetitionPickerVisibility(true);
                }}>
                <Text style={styles.buttonText}>Toistuva</Text>
                <MaterialIcons name="repeat" style={styles.buttonIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.selectedTextsContainer}>
              <Text
                style={[
                  styles.validationNotificationText,
                  {
                    display: validationNotification ? 'flex' : 'none',
                    borderWidth: validationNotification ? 2 : 0,
                  },
                ]}>
                {validationNotification}
              </Text>
              <Text style={styles.selectedTextsTitle}>
                {'Hälytyksen päivämäärä:'}
              </Text>
              <Text style={styles.selectedTexts}>{`${
                newAlert.date ? getFinDateFormat(newAlert.date) : '-'
              }`}</Text>
              <Text style={styles.selectedTextsTitle}>
                {'Hälytyksen kellonaika:'}
              </Text>
              <Text style={styles.selectedTexts}>
                {newAlert.time.hour && newAlert.time.hour
                  ? `${newAlert.time.hour}:${newAlert.time.minute}`
                  : '-'}
              </Text>
              <Text style={styles.selectedTextsTitle}>
                {'Muistutus ennen hälytystä:'}
              </Text>
              <Text style={styles.selectedTexts}>{`${
                newAlert.reminder ? newAlert.reminder : '-'
              }`}</Text>
              <Text style={styles.selectedTextsTitle}>
                {'Toista hälytys: '}
              </Text>
              <Text style={styles.selectedTexts}>{`${
                newAlert.repetition ? newAlert.repetition : '-'
              }`}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => {
                handleNewAlertCreate(newAlert);
              }}>
              <Text style={styles.createButtonText}>Luo hälytys</Text>
              <MaterialIcons name="done" style={styles.createButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <DatePicker
          visibility={datePickerVisibility}
          setVisibility={setDatePickerVisibility}
          value={newAlert.date}
          setValue={(value: string) => {
            handleNewAlertChange('date', value);
          }}
        />
        <TimePicker
          visibility={timePickerVisibility}
          setVisibility={setTimePickerVisibility}
          value={newAlert.time}
          setValue={(value: {hour: string; minute: string}) => {
            handleNewAlertChange('time', value);
          }}
        />
        <ReminderPicker
          visibility={reminderPickerVisibility}
          setVisibility={setReminderPickerVisibility}
          setValue={(value: string) => {
            handleNewAlertChange('reminder', value);
          }}
        />
        <RepetitionPicker
          visibility={repetitionPickerVisibility}
          setVisibility={setRepetitionPickerVisibility}
          setValue={(value: string) => {
            handleNewAlertChange('repetition', value);
          }}
        />
      </View>
    </Modal>
  );
};

export default AddAlertMenu;

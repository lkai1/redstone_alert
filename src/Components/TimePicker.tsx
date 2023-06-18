import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import styles from './TimePicker.styles';
import getUniqueKey from '../utils/uniqueKey';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  value: {hour: string; minute: string};
  setValue: (value: {hour: string; minute: string}) => void;
}

const TimePicker = ({visibility, setVisibility, value, setValue}: Props) => {
  const [visibleSelection, setVisibleSelection] = useState(0);

  const getHours = () => {
    return Array.from({length: 24}).map((_v, hour: number) => {
      const hourAsStr = hour.toString();
      return hourAsStr.length === 1 ? `0${hourAsStr}` : hourAsStr;
    });
  };
  const getMinutes = () => {
    return Array.from({length: 60}).map((_v, minute: number) => {
      const hourAsStr = minute.toString();
      return hourAsStr.length === 1 ? `0${hourAsStr}` : hourAsStr;
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        setVisibility(false);
      }}>
      <View style={styles.main}>
        <View style={styles.contentContainer}>
          <View
            style={[
              styles.navButtonsContainer,
              {justifyContent: visibleSelection ? 'space-between' : 'flex-end'},
            ]}>
            {visibleSelection === 1 && (
              <MaterialIcons
                name="west"
                style={styles.arrowIcon}
                onPress={() => {
                  setVisibleSelection(0);
                }}
              />
            )}
            <MaterialIcons
              name="close"
              style={styles.closeTimePickerIcon}
              onPress={() => {
                setVisibility(false);
                setVisibleSelection(0);
              }}
            />
          </View>
          <View style={styles.timeSelectionContainer}>
            <View style={styles.selectedTimeTextContainer}>
              <Text style={styles.selectedTimeText}>
                <Text
                  style={{
                    color: visibleSelection === 0 ? '#ec1d0b' : '#696969',
                  }}>
                  {value.hour ? value.hour : '--'}
                </Text>
                :
                <Text
                  style={{
                    color: visibleSelection === 1 ? '#ec1d0b' : '#696969',
                  }}>
                  {value.minute ? value.minute : '--'}
                </Text>
              </Text>
            </View>
            {visibleSelection === 0 ? (
              <ScrollView
                style={{
                  height: Dimensions.get('window').height - 120,
                }}
                contentContainerStyle={[styles.timeButtonsContainer]}>
                {getHours().map((hour, i) => {
                  return (
                    <TouchableOpacity
                      style={styles.timeButton}
                      key={getUniqueKey('hour', i)}
                      onPress={() => {
                        setValue({hour, minute: value.minute});
                        setVisibleSelection(1);
                      }}>
                      <Text style={styles.timeButtonText}>{hour}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : (
              <ScrollView
                contentContainerStyle={styles.timeButtonsContainer}
                style={{
                  height: Dimensions.get('window').height - 120,
                }}>
                {getMinutes().map((minute, i) => {
                  return (
                    <TouchableOpacity
                      style={styles.timeButton}
                      key={getUniqueKey('minute', i)}
                      onPress={() => {
                        setValue({hour: value.hour, minute});
                      }}>
                      <Text style={styles.timeButtonText}>{minute}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TimePicker;

import React, {Dispatch, SetStateAction} from 'react';
import {Calendar} from 'react-native-calendars';
import {Modal, View} from 'react-native';
import styles from './DatePicker.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import translations from '../translations/calendarTranslations';

interface Props {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  value: string;
  setValue: (value: string) => void;
}

translations();

const DatePicker = ({visibility, setVisibility, value, setValue}: Props) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        setVisibility(!visibility);
      }}>
      <View style={styles.main}>
        <View style={styles.datePickerContentContainer}>
          <MaterialIcons
            name="close"
            style={styles.closeDatePickerIcon}
            onPress={() => {
              setVisibility(false);
            }}
          />
          <Calendar
            markingType={'custom'}
            markedDates={{
              [today]: {
                customStyles: {
                  container: {
                    backgroundColor: 'black',
                  },
                  text: {
                    color: 'white',
                    fontWeight: 'bold',
                  },
                },
              },
              [value]: {
                customStyles: {
                  text: {
                    color: '#ec1d0b',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            context={{date: ''}}
            minDate={today}
            firstDay={1}
            disableMonthChange={true}
            onDayPress={date => {
              setValue(date.dateString);
            }}
            renderArrow={direction => {
              if (direction === 'left') {
                return <MaterialIcons name="west" style={styles.arrowIcon} />;
              }
              return <MaterialIcons name="east" style={styles.arrowIcon} />;
            }}
            hideExtraDays={true}
            theme={{
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 16,
              calendarBackground: 'black',
              textSectionTitleColor: 'rgb(170, 170, 170)',
              textDisabledColor: 'rgb(100, 100, 100)',
              monthTextColor: 'rgb(240, 240, 240)',
              dayTextColor: 'rgb(240, 240, 240)',
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;

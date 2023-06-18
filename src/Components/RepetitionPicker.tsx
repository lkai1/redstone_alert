import React, {Dispatch, SetStateAction} from 'react';
import {TouchableOpacity, Text, View, ScrollView, Modal} from 'react-native';
import styles from './RepetitionPicker.styles';
import getUniqueKey from '../utils/uniqueKey';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  setValue: (value: string) => void;
}

const RepetitionPicker = ({visibility, setVisibility, setValue}: Props) => {
  const selections = [
    'Ei toistuvaa hälytystä',
    '1 tunti',
    '1 päivä',
    '1 viikko',
  ];

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
          <View style={styles.navButtonsContainer}>
            <MaterialIcons
              name="close"
              style={styles.closeRepetitionPickerIcon}
              onPress={() => {
                setVisibility(false);
              }}
            />
          </View>
          <ScrollView>
            {selections.map((selection, i) => {
              return (
                <TouchableOpacity
                  key={getUniqueKey('reminder', i)}
                  style={styles.selectionButton}
                  onPress={() => {
                    setValue(selection);
                    setVisibility(false);
                  }}>
                  <Text style={styles.selectionButtonText}>{selection}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default RepetitionPicker;

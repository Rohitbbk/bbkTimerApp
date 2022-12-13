import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';

import BackgroundTimer from 'react-native-background-timer';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../Utility/components/Metric';
import TimeEditPicker from '../../../Dashboard/components/picker/EditTimePicker';
import {getRemaining, showNotificationOnTimerStop} from '../../utility/Utility';

const BoxRow = ({
  boxName,
  index,
  active,
  remainingSecs,
  updateOvenBoxTimerValue,
  selectedDeck,
  time,
  hide,
  deckIndex,
  editOvenBoxTimeValue,
  tabType = 'gas',
  isOven,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState(null);
  const {mins, secs} = getRemaining(remainingSecs);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedValue, setSelectedValue] = useState('5');
  const intervalId = React.useRef(null);
  const pickerRef = useRef();

  let interval = null;

  const editTimer = time => {
    editOvenBoxTimeValue(index, time, tabType);
    setModalVisible(!modalVisible);
    onChangeNumber(null);
  };

  const resetTimer = () => {
    if (active) {
      Alert.alert('', 'Please long press for stop the time');
    } else if (time) {
      console.log('Start Timer for Deck Number ', deckIndex);
      updateOvenBoxTimerValue(index, true, false, time, deckIndex, tabType);
    }
  };

  const boxLongPress = () => {
    if (active) {
      updateOvenBoxTimerValue(index, false, false, time, deckIndex, tabType);
      BackgroundTimer.clearInterval(interval);
    } else {
      pickerRef.current.focus();
    }
  };

  useEffect(() => {
    if (active && remainingSecs === 0) {
      showNotificationOnTimerStop(
        deckIndex,
        selectedDeck,
        intervalId.current,
        'Gas',
      );
    } else if (active) {
      intervalId.current = BackgroundTimer.setInterval(() => {
        updateOvenBoxTimerValue(index, false, true, time, deckIndex, tabType);
      }, 1000);
    }
    return () => BackgroundTimer.clearInterval(intervalId.current);
  }, [active, remainingSecs]);

  if (hide) {
    return null;
  }

  return (
    <View style={{flex: 1, marginTop: 20}}>
      <Pressable onPress={resetTimer} onLongPress={boxLongPress}>
        <View
          style={[styles.item, {backgroundColor: active ? 'red' : 'black'}]}>
          {active ? (
            <Text style={styles.title}>{mins + ':' + secs}</Text>
          ) : (
            <Text style={styles.title}>{time + ':00'}</Text>
          )}

          <TimeEditPicker
            isOven={isOven}
            pickerRef={pickerRef}
            selectedValue={selectedValue}
            updateTime={editTimer}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000',
    padding: 10,
    width: horizontalScale(50),
    height: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(25),
    marginVertical: 18,
    marginHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: moderateScale(12),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: horizontalScale(200),
    minHeight: verticalScale(300),
    padding: 16,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: horizontalScale(150),
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#930433',
  },
  buttonClose: {
    backgroundColor: '#930433',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default BoxRow;

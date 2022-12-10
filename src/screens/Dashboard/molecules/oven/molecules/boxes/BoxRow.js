import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import {Container, ModalSafeAreaView, ModalView} from './styles';
import BackgroundTimer from 'react-native-background-timer';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../Utility/components/Metric';
import EditBoxTimer from './EditBoxTimer';
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
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState(null);
  const {mins, secs} = getRemaining(remainingSecs);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const intervalId = React.useRef(null);

  let interval = null;

  const editTimer = () => {
    editOvenBoxTimeValue(index, number, tabType);
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
      setModalVisible(!modalVisible);
    }
  };

  useEffect(() => {
    if (active && remainingSecs === 0) {
      showNotificationOnTimerStop(deckIndex, selectedDeck, intervalId.current);
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
    <Container>
      <EditBoxTimer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        number={number}
        onChangeNumber={onChangeNumber}
        startTimer={editTimer}
      />
      <Pressable onPress={resetTimer} onLongPress={boxLongPress}>
        <View
          style={[styles.item, {backgroundColor: active ? 'red' : 'black'}]}>
          {active ? (
            <Text style={styles.title}>{mins + ':' + secs}</Text>
          ) : (
            <Text style={styles.title}>{time + ':00'}</Text>
          )}
        </View>
      </Pressable>
    </Container>
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
    width: horizontalScale(30),
    height: horizontalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(20),
    marginVertical: 18,
    marginHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: moderateScale(14),
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

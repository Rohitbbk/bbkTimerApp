import BackgroundTimer from 'react-native-background-timer';
import ReactNativeAN from '../../../Utility/components/ReactNativeAN';
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from '../../../Utility/components/Metric';
const intitalTimeForOven = 30;
const intitalTimeForGas = 2;
const formatNumber = number => ('0' + number).slice(-2);

import startIcon from '../../../assets/start.png';
import stopIcon from '../../../assets/stop.png';
import editTimerIcon from '../../../assets/timer.png';

export const floatingActionPress = (
  id,
  setOvenData,
  forceUpdate,
  pickerRef,
) => {
  switch (id) {
    case 'startAll':
      startAllBoxTime(setOvenData, forceUpdate);
      break;
    case 'stopAll':
      stopAllBoxTime(setOvenData, forceUpdate);
      break;

    case 'editTimer':
      pickerRef.current.focus();
      // setModalVisible(true);
      break;
  }
};

export const editAllBoxTime = (time, setOvenData, forceUpdate) => {
  setOvenData(prevState => {
    let newState = prevState;
    newState.map((item, index) => {
      item.boxTime = time;
    });

    return newState;
  });
  forceUpdate();
};

export const editSingleBoxTime = (time, index, setOvenData, forceUpdate) => {
  setOvenData(prevState => {
    let newState = prevState;
    newState[index].boxTime = time;
    return newState;
  });
  forceUpdate();
};

const startTimer = (newState, index, time) => {
  newState[index].active = true;
  newState[index].remainingSecs = parseInt(time, 10) * 10;
};

const deleteBoxTime = (newState, index) => {
  newState[index].active = false;
  newState[index].remainingSecs = 0;
};

export const startAllBoxTime = (setOvenData, forceUpdate) => {
  setOvenData(prevState => {
    let newState = prevState;
    newState.map((item, index) => {
      startTimer(newState, index, item.boxTime);
    });

    return newState;
  });
  forceUpdate();
};

export const stopAllBoxTime = (setOvenData, forceUpdate) => {
  setOvenData(prevState => {
    let newState = prevState;
    newState.map((item, index) => {
      deleteBoxTime(newState, index);
    });

    return newState;
  });
  forceUpdate();
};

export const updateBoxTimeValue = (
  setOvenData,
  forceUpdate,
  index,
  start,
  update,
  number,
) => {
  setOvenData(prevState => {
    let newState = prevState;
    if (start) {
      startTimer(newState, index, number);
    } else if (update) {
      const remainingSecsValue = newState[index].remainingSecs;
      newState[index].remainingSecs = remainingSecsValue - 1;
    } else {
      deleteBoxTime(newState, index);
      ReactNativeAN.stopAlarmSound();
    }

    return newState;
  });
  forceUpdate();
};

const textStyleForAction = {
  fontSize: moderateScale(10),
  textAlign: 'center',
};
const textContainerStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: horizontalScale(50),
  height: verticalScale(35),
};

const buttonColor = '#930433';

export const getRemaining = time => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return {mins: formatNumber(mins), secs: formatNumber(secs)};
};

export const showNotificationOnTimerStop = (
  deckIndex,
  selectedDeck,
  intervalId,
  tabType,
) => {
  const alarmNotifData = {
    title: 'BBK Timer App',
    message:
      'Please open the ' +
      tabType +
      (deckIndex + 1) +
      ' and check the boxes which is completed ',
    channel: 'my_channel_id',
    small_icon: 'ic_launcher',
    data: {deckNumber: selectedDeck},
  };
  ReactNativeAN.sendNotification(alarmNotifData);
  BackgroundTimer.clearInterval(intervalId);
};

export const FloatingActionData = [
  {
    text: 'Start All',
    name: 'startAll',
    icon: startIcon,
    textBackground: 'white',
    position: 1,
    textStyle: textStyleForAction,
    textContainerStyle: textContainerStyle,
    buttonSize: verticalScale(60),
    color: buttonColor,
  },
  {
    text: 'Stop All',
    name: 'stopAll',
    icon: stopIcon,
    position: 2,
    textStyle: textStyleForAction,
    textContainerStyle: textContainerStyle,
    buttonSize: verticalScale(60),
    color: buttonColor,
  },
  {
    text: 'Edit Timer',
    name: 'editTimer',
    icon: editTimerIcon,
    position: 3,
    textStyle: textStyleForAction,
    textContainerStyle: textContainerStyle,
    buttonSize: verticalScale(60),
    color: buttonColor,
  },
];

export const ovenDeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
];

export const oven2DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
];
export const oven3DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
];
export const oven4DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForOven,
    remainingSecs: 0,
    active: false,
  },
];
export const gas1DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
];
export const gas2DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
];
export const gas3DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
];
export const gas4DeckBoxes = [
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: intitalTimeForGas,
    remainingSecs: 0,
    active: false,
  },
];

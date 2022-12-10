import BackgroundTimer from 'react-native-background-timer';
import ReactNativeAN from '../../../Utility/components/ReactNativeAN';
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from '../../../Utility/components/Metric';
const formatNumber = number => ('0' + number).slice(-2);

import startIcon from '../../../assets/start.png';
import stopIcon from '../../../assets/stop.png';
import editTimerIcon from '../../../assets/timer.png';

const textStyleForAction = {
  fontSize: moderateScale(10),
  textAlign: 'center',
  padding: 10,
};
const textContainerStyle = {
  width: horizontalScale(50),
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
) => {
  const alarmNotifData = {
    title: 'BBK Timer App',
    message:
      'Please open the Oven' +
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

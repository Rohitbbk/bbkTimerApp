import BackgroundTimer from 'react-native-background-timer';
import ReactNativeAN from '../../../../../Utility/components/ReactNativeAN';
const formatNumber = number => ('0' + number).slice(-2);

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
    position: 1,
  },
  {
    text: 'Stop All',
    name: 'stopAll',
    position: 2,
  },
  {
    text: 'Edit Timer',
    name: 'editTimer',
    position: 3,
  },
];

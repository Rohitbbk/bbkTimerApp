import React, {useState, useReducer, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  NativeEventEmitter,
  NativeModules,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import CustomStatusBar from '../../CustomStatusBar';
import ReactNativeAN from '../../../Utility/components/ReactNativeAN';

import {storeData, decksBoxes, dashboardData} from './RawData';
import TabSection from '../molecules/TabSection';

const {RNAlarmNotification} = NativeModules;
const RNAlarmEmitter = new NativeEventEmitter(RNAlarmNotification);

const dismissSubscription = RNAlarmEmitter.addListener(
  'OnNotificationDismissed',
  data => console.log(JSON.parse(data)),
);

const openedSubscription = RNAlarmEmitter.addListener(
  'OnNotificationOpened',
  data => {
    console.log(JSON.parse(data));
    ReactNativeAN.stopAlarmSound();
    ReactNativeAN.removeAllFiredNotifications();
  },
);

const DashboardScreen = () => {
  const [mainData, setMainData] = useState(dashboardData);
  const [oven, setOven] = useState(true);
  const [gas, setGas] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    return () => {
      dismissSubscription.remove();
      openedSubscription.remove();
    };
  }, []);

  const addNewOvenDeckData = tabType => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      const dataLength = tab.decks.length + 1;
      const newOvenDeck = {
        name: 'Oven' + dataLength,
        deckSelected: true,
        id: dataLength,
        deckBoxes: decksBoxes,
      };
      tab.selectedDeck = dataLength - 1;
      tab.decks.push(newOvenDeck);

      return newState;
    });
    forceUpdate();
  };

  const removeOvenDeck = () => {
    setMainData(prevState => {
      let newState = prevState;
      const tabs = oven ? newState.oven : newState.gas;
      const dataLength = tabs.decks.length;
      const selectedDeck = tabs.selectedDeck;
      if (dataLength > 1) {
        tabs.decks.splice(selectedDeck, 1);
        tabs.selectedDeck = 0;
      } else {
        Alert.alert('BBKTimer', 'Atleast one deck should be present');
      }

      return newState;
    });
    forceUpdate();
  };

  const startTimer = (tab, index, number, deckIndex) => {
    const selectedDeck = tab.selectedDeck;
    const selectedDeckNumber = tab.decks[selectedDeck];
    selectedDeckNumber.deckBoxes[index].active = true;
    selectedDeckNumber.deckBoxes[index].remainingSecs = parseInt(1, 10) * 10;
  };

  const deleteOvenTimer = (tab, index) => {
    const selectedDeck = tab.selectedDeck;
    tab.decks[selectedDeck].deckBoxes[index].active = false;
    tab.decks[selectedDeck].deckBoxes[index].remainingSecs = 0;
  };

  const startAllTimer = () => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      const selectedDeck = tab.selectedDeck;
      tab.decks[selectedDeck].deckBoxes.map((item, index) => {
        startTimer(tab, index, item.boxTime);
      });

      return newState;
    });
    forceUpdate();
  };

  const stopAllOvenTimer = () => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      const selectedDeck = tab.selectedDeck;
      tab.decks[selectedDeck].deckBoxes.map((item, index) => {
        deleteOvenTimer(tab, index);
      });

      return newState;
    });
    forceUpdate();
  };

  const updateOvenDeckBoxTimeValue = time => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      const selectedDeck = tab.selectedDeck;
      tab.decks[selectedDeck].deckBoxes.map((item, index) => {
        item.boxTime = time;
      });

      return newState;
    });
    forceUpdate();
  };

  const editOvenBoxTimeValue = (index, time, tabType) => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      console.log('tab Value is ', tabType);
      const selectedDeck = tab.selectedDeck;
      tab.decks[selectedDeck].deckBoxes[index].boxTime = time;
      return newState;
    });
    forceUpdate();
  };

  const updateOvenBoxTimerValue = (
    index,
    start,
    update,
    number,
    deckIndex,
    tabType,
  ) => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      const selectedDeck = tab.selectedDeck;
      if (start) {
        startTimer(tab, index, number, deckIndex);
      } else if (update) {
        const remainingSecsValue =
          tab.decks[deckIndex].deckBoxes[index].remainingSecs;
        tab.decks[deckIndex].deckBoxes[index].remainingSecs =
          remainingSecsValue - 1;
      } else {
        deleteOvenTimer(tab, index);
        ReactNativeAN.stopAlarmSound();
      }

      return newState;
    });
    forceUpdate();
  };

  const ovenTabChange = (index, tabType) => {
    setMainData(prevState => {
      let newState = prevState;
      const tab = oven ? newState.oven : newState.gas;
      tab.selectedDeck = index;
      return newState;
    });
    forceUpdate();
  };
  const headerTabPress = value => {
    if (value === 'oven') {
      setOven(true);
      setGas(false);
    } else {
      setOven(false);
      setGas(true);
    }
    forceUpdate();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: '#ECF0F1',
      }}>
      <CustomStatusBar />
      <Header tabChange={headerTabPress} oven={oven} gas={gas} />
      <TabSection
        isOven={oven}
        data={oven ? mainData.oven : mainData.gas}
        addNewOvenDeckData={addNewOvenDeckData}
        ovenTabChange={ovenTabChange}
        updateOvenBoxTimerValue={updateOvenBoxTimerValue}
        removeOvenDeck={removeOvenDeck}
        startAllTimer={startAllTimer}
        stopAllOvenTimer={stopAllOvenTimer}
        editOvenBoxTimeValue={editOvenBoxTimeValue}
        updateOvenDeckBoxTimeValue={updateOvenDeckBoxTimeValue}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;

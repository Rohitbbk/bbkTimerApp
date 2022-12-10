import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
  View,
  Text,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {FloatingActionData} from '../../utility/Utility';
import EditModal from '../modal/EditModal';
import BoxRow from './BoxRow';

const BoxesList = ({
  deckData,
  updateOvenBoxTimerValue,
  removeOvenDeck,
  selectedDeck,
  startAllTimer,
  stopAllOvenTimer,
  updateOvenTimeValue,
  updateOvenDeckBoxTimeValue,
  hide,
  deckIndex,
  editOvenBoxTimeValue,
  tabType,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item, index}) => {
    const showSetText =
      tabType === 'oven'
        ? index === 0 || index === 1 || index === 2 || index === 3
        : index === 0 ||
          index === 1 ||
          index === 2 ||
          index === 3 ||
          index === 4 ||
          index === 5;
    return (
      <View style={{flex: 1}}>
        <SetText>SET2222 {index + 1}</SetText>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 16,
          }}>
          <BoxRow
            active={item.active}
            remainingSecs={item.remainingSecs}
            boxName={item.boxName}
            time={item.boxTime}
            index={index}
            selectedDeck={selectedDeck}
            updateOvenBoxTimerValue={updateOvenBoxTimerValue}
            hide={hide}
            deckIndex={deckIndex}
            editOvenBoxTimeValue={editOvenBoxTimeValue}
            tabType={tabType}
          />
        </View>
      </View>
    );
  };

  const createTwoButtonAlert = () =>
    Alert.alert('BBK Timer', 'Do you want to delete the whole deck ?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          removeOvenDeck();
        },
      },
    ]);

  const floatingActionPress = id => {
    switch (id) {
      case 'deleteDeck':
        createTwoButtonAlert();
        break;

      case 'startAll':
        startAllTimer();
        break;
      case 'stopAll':
        stopAllOvenTimer();
        break;

      case 'editTimer':
        setModalVisible(true);
        break;
    }
  };

  const _keyExtractor = (item, index) => index;

  const containerStyle = hide ? styles.hideContainer : styles.container;

  return (
    <SafeAreaView style={containerStyle}>
      {modalVisible ? (
        <EditModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          updateOvenDeckBoxTimeValue={updateOvenDeckBoxTimeValue}
        />
      ) : null}

      <FlatList
        data={deckData}
        renderItem={renderItem}
        numColumns={6}
        keyExtractor={_keyExtractor}
      />
      {hide ? null : (
        <FloatingAction
          actions={FloatingActionData}
          color={'#930433'}
          shadow={{fontSize: 20}}
          onPressItem={floatingActionPress}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  hideContainer: {
    width: 0,
    height: 0,
  },
  title: {
    fontSize: 32,
  },
});

export default BoxesList;

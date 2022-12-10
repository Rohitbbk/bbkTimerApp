import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import TabRow from './TabRow';

const OvenHeaderTab = ({
  ovenData,
  addNewOvenDeckData,
  ovenTabChange,
  tabType,
}) => {
  const renderItem = ({item, index}) => {
    const isEnd = index === ovenData?.decks?.length - 1;
    const maxLimitOfDecks = ovenData?.decks?.length <= 3;
    const isSelectedDeck = index === ovenData.selectedDeck;
    return (
      <TabRow
        index={index}
        title={item.name}
        addNewOvenDeckData={addNewOvenDeckData}
        tabType={tabType}
        isEnd={isEnd}
        isSelectedDeck={isSelectedDeck}
        ovenTabChange={ovenTabChange}
        maxLimitOfDecks={maxLimitOfDecks}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ovenData?.decks}
        shadow={{backgroundColor: '#000'}}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    borderTopWidth: 2,
    borderColor: 'white',
    backgroundColor: '#930433',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  addButtonView: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default OvenHeaderTab;

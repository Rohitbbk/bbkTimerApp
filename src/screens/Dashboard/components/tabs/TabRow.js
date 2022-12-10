import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../Utility/components/Metric';
import {
  AddTouchableOpacity,
  Container,
  SelectorLine,
  TextTitle,
  TouchableOpacityContainer,
} from './TabStyles';

const TabRow = ({
  title,
  addNewOvenDeckData,
  isEnd,
  isSelectedDeck,
  ovenTabChange,
  index,
  maxLimitOfDecks,
  tabType,
}) => {
  return (
    <Container isSelectedDeck={isSelectedDeck}>
      <View>
        <TouchableOpacityContainer onPress={() => ovenTabChange(index)}>
          <TextTitle isSelectedDeck={isSelectedDeck}>{title}</TextTitle>
        </TouchableOpacityContainer>
      </View>

      {maxLimitOfDecks && isEnd && (
        <AddTouchableOpacity onPress={addNewOvenDeckData(tabType)}>
          <TextTitle isSelectedDeck={isSelectedDeck}>+</TextTitle>
        </AddTouchableOpacity>
      )}
    </Container>
  );
};

export default TabRow;

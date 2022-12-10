import React from 'react';
import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../Utility/components/Metric';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  width: 100%;
  border-bottom-width: ${props => (props.isSelectedDeck ? '4' : '1')};
  border-bottom-color: white;
`;

export const TouchableOpacityContainer = styled.TouchableOpacity`
  padding: 10px;
  margin: 8px 16px 8px 16px;
`;

export const AddTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  border-width: 1px;
  border-radius: 10px;
  border-color: white;
`;

export const TextTitle = styled.Text`
  color: white;
  font-size: ${props =>
    props.isSelectedDeck ? moderateScale(16) : moderateScale(14)};
  font-weight: ${props => (props.isSelectedDeck ? '700' : '100')};
`;

export const SelectorLine = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${props =>
    props.isSelectedDeck ? 'white' : 'transparent'};
`;

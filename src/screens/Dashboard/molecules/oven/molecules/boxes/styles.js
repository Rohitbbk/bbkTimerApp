import React from 'react';
import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../Utility/components/Metric';

export const Container = styled.View`
  flex: 1;
  margin-top: 22px;
`;

export const ModalSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  width: horizontalScale(200);
  min-height: verticalScale(300);
  padding: 16px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;
export const ModalTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export const SetText = styled.Text`
  color: black;
  margin-bottom: ${horizontalScale(20)};
  text-align: center;
  font-weight: 700;
  font-size: ${moderateScale(20)};
`;
export const ModalDescription = styled.Text`
  color: black;
  font-size: 10px;
  font-weight: 500;
`;
export const ModalTextInput = styled.TextInput`
  width: horizontalScale(150);
  margin: horizontalScale(10);
  border-width: 1px;
  padding: 10px;
`;

import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

const TimeEditPicker = ({isOven, pickerRef, updateTime, selectedValue}) => {
  if (!isOven) {
    return (
      <>
        <Picker
          style={{display: 'none', opacity: 0, height: 0, width: 0}}
          ref={pickerRef}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            if (itemIndex > 0) {
              updateTime(itemValue);
            }
          }}>
          <Picker.Item label="Please select time" value="0" />
          <Picker.Item label="2 min" value="2" />
          <Picker.Item label="3 min" value="3" />
          <Picker.Item label="4 min" value="4" />
          <Picker.Item label="5 min" value="5" />
          <Picker.Item label="6 min" value="6" />
        </Picker>
      </>
    );
  }
  return (
    <>
      <Picker
        style={{display: 'none', opacity: 0, height: 0, width: 0}}
        ref={pickerRef}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          if (itemIndex > 0) {
            updateTime(itemValue);
          }
        }}>
        <Picker.Item label="Please select time" value="0" />
        <Picker.Item label="15 min" value="15" />
        <Picker.Item label="20 min" value="20" />
        <Picker.Item label="25 min" value="25" />
        <Picker.Item label="30 min" value="30" />
        <Picker.Item label="35 min" value="35" />
      </Picker>
    </>
  );
};

export default TimeEditPicker;

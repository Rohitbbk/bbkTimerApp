import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

const OvenPickerItem = ({isOven, pickerRef, updateTime, selectedValue}) => {
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

export default OvenPickerItem;

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
          <Picker.Item label="2 min" value={2} />
          <Picker.Item label="3 min" value={3} />
          <Picker.Item label="4 min" value={4} />
          <Picker.Item label="5 min" value={5} />
          <Picker.Item label="6 min" value={6} />
          <Picker.Item label="7 min" value={7} />
          <Picker.Item label="8 min" value={8} />
          <Picker.Item label="9 min" value={9} />
          <Picker.Item label="10 min" value={10} />
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
        {[...Array(61)].map((_, i) => {
          if (i === 0) {
            return <Picker.Item label="Please select time" value={''} />;
          }
          return <Picker.Item label={i + ' min'} value={i} />;
        })}
      </Picker>
    </>
  );
};

export default TimeEditPicker;

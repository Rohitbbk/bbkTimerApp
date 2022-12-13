import React from 'react';
import {Text} from 'react-native';
import {moderateScale} from '../../../Utility/components/Metric';

const SetText = ({index, numberOfColumn}) => {
  const showSetText =
    numberOfColumn === 6
      ? index === 0 ||
        index === 1 ||
        index === 2 ||
        index === 3 ||
        index === 4 ||
        index === 5
      : index === 0 || index === 1 || index === 2 || index === 3;
  if (showSetText) {
    return (
      <>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: moderateScale(10),
          }}>
          SET {index + 1}
        </Text>
      </>
    );
  }
  return null;
};
export default SetText;

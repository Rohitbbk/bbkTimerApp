import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../Utility/components/Metric';

const Header = ({tabChange, oven, gas}) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: '#930433'}}>
      <TouchableOpacity
        onPress={() => Alert.alert('', 'info')}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}>
        <Image
          style={{
            width: horizontalScale(12),
            height: horizontalScale(12),
            tintColor: 'white',
          }}
          source={require('../../../assets/infoo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('', 'Logout')}
        style={{
          position: 'absolute',
          left: 20,
          bottom: 20,
        }}>
        <Image
          style={{
            width: horizontalScale(12),
            height: horizontalScale(12),
            tintColor: 'white',
          }}
          source={require('../../../assets/logoutt.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          height: verticalScale(70),
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: verticalScale(10),
        }}>
        <TouchableOpacity
          onPress={() => tabChange('oven')}
          style={{
            alignItems: 'center',
            borderWidth: 1,
            borderColor: oven ? 'transparent' : 'white',
            backgroundColor: oven ? '#DDDDDD' : 'transparent',

            padding: 10,
            width: horizontalScale(120),
            height: verticalScale(60),
            borderRadius: 16,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: oven ? 'black' : 'white',
              fontWeight: '800',
              fontSize: moderateScale(14),
            }}>
            Oven
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => tabChange('gas')}
          style={{
            width: horizontalScale(120),
            height: verticalScale(60),
            borderRadius: 16,
            borderWidth: 1,

            borderColor: oven ? 'white' : 'transparent',
            alignItems: 'center',
            backgroundColor: oven ? 'transparent' : '#DDDDDD',
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '800',
              color: gas ? 'black' : 'white',
              fontSize: moderateScale(14),
            }}>
            GAS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

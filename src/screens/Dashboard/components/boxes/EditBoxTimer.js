import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  Pressable,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {ModalSafeAreaView} from './styles';
import {Picker} from '@react-native-picker/picker';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../Utility/components/Metric';

const EditBoxTimer = ({
  modalVisible,
  setModalVisible,
  number,
  onChangeNumber,
  startTimer,
}) => {
  const [selectedValue, setSelectedValue] = useState('5');
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ModalSafeAreaView>
        <View style={styles.modalView}>
          <View style={{position: 'absolute', top: -25, right: -15}}>
            <Pressable
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>X</Text>
            </Pressable>
          </View>
          <Text style={{fontSize: moderateScale(20), color: 'black'}}>
            BBK Timer
          </Text>
          <Text style={{fontSize: moderateScale(14), color: 'black'}}>
            Update the time in minutes
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              height: 50,
              width: 200,
            }}
            onValueChange={(itemValue, itemIndex) => startTimer(itemValue)}>
            <Picker.Item label="15 min" value="15" />
            <Picker.Item label="20 min" value="20" />
            <Picker.Item label="25 min" value="25" />
            <Picker.Item label="30 min" value="30" />
            <Picker.Item label="35 min" value="35" />
          </Picker>
        </View>
      </ModalSafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000',
    padding: 10,
    width: horizontalScale(40),
    height: horizontalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(20),
    marginVertical: 18,
    marginHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: moderateScale(18),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: horizontalScale(200),
    minHeight: verticalScale(200),
    padding: 16,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: horizontalScale(150),
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#930433',
  },
  buttonClose: {
    backgroundColor: '#930433',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default EditBoxTimer;

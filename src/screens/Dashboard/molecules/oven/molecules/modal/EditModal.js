import React, {useState} from 'react';
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
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../Utility/components/Metric';

export const EditModal = ({
  modalVisible,
  setModalVisible,
  updateOvenDeckBoxTimeValue,
}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.mainView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                color: 'black',
                fontSize: moderateScale(20),
                fontWeight: 'bold',
              }}>
              BBK Timer
            </Text>
            <TextInput
              style={{
                height: verticalScale(50),
                width: horizontalScale(150),
                margin: horizontalScale(10),
                borderWidth: 1,
                padding: 10,
              }}
              maxLength={2}
              onChangeText={text => {
                onChangeNumber(text.replace(/[^0-9]/g, ''));
              }}
              value={number}
              placeholder="Enter time in minutes"
              keyboardType="numeric"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                updateOvenDeckBoxTimeValue(number);
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
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
    minHeight: verticalScale(300),
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

export default EditModal;

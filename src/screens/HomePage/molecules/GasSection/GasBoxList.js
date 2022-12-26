import React, {useState, useRef, useReducer} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {
  editSingleBoxTime,
  updateBoxTimeValue,
  editAllBoxTime,
  floatingActionPress,
} from '../../utility/Utility';
import BoxRow from './BoxRow';
import TimeEditPicker from '../../../Dashboard/components/picker/EditTimePicker';
import {FloatingActionData} from '../../../Dashboard/utility/Utility';
import SetText from '../../atoms/SetText';
import {
  BoxRowContainer,
  ImageBackgroundView,
  imagePath,
  imageStyle,
  RenderItemContainer,
  SafeAreaContainer,
} from './GasStyles';

const GasBoxList = ({data}) => {
  const [ovenData, setOvenData] = useState(data);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [selectedValue, setSelectedValue] = useState('5');
  const pickerRef = useRef();

  const updateOvenDeckBoxTimeValue = time => {
    //  Update All Boxes time value
    editAllBoxTime(time, setOvenData, forceUpdate);
  };

  const editOvenBoxTimeValue = (index, time, tabType) => {
    //  Edit Single Box Time Value
    editSingleBoxTime(time, index, setOvenData, forceUpdate);
  };

  const updateOvenBoxTimerValue = (
    index,
    start,
    update,
    number,
    deckIndex,
    tabType,
  ) => {
    //  Start , Update timerValue,Delete single box Time Value
    updateBoxTimeValue(setOvenData, forceUpdate, index, start, update, number);
  };

  const renderItem = ({item, index}) => {
    return (
      <RenderItemContainer index={index}>
        <SetText index={index} numberOfColumn={6} />
        <BoxRowContainer>
          <BoxRow
            active={item.active}
            remainingSecs={item.remainingSecs}
            boxName={item.boxName}
            time={item.boxTime}
            index={index}
            selectedDeck={0}
            updateOvenBoxTimerValue={updateOvenBoxTimerValue}
            hide={false}
            deckIndex={0}
            editOvenBoxTimeValue={editOvenBoxTimeValue}
            tabType={''}
            isOven={false}
          />
        </BoxRowContainer>
      </RenderItemContainer>
    );
  };
  return (
    <ImageBackgroundView source={imagePath} imageStyle={imageStyle}>
      <SafeAreaContainer>
        <FlatList
          key={'_'}
          data={ovenData}
          renderItem={renderItem}
          numColumns={6}
          keyExtractor={item => '_' + item.id}
        />

        <FloatingAction
          actions={FloatingActionData}
          color={'#930433'}
          buttonSize={70}
          onPressItem={id =>
            floatingActionPress(id, setOvenData, forceUpdate, pickerRef)
          }
        />
        <TimeEditPicker
          isOven={false}
          pickerRef={pickerRef}
          selectedValue={selectedValue}
          updateTime={updateOvenDeckBoxTimeValue}
        />
      </SafeAreaContainer>
    </ImageBackgroundView>
  );
};

export default GasBoxList;

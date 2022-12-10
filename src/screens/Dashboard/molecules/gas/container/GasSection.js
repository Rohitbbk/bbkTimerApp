import React, {useRef} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import BoxesList from '../molecules/boxes/BoxesList';
import OvenHeaderTab from '../molecules/tabs/OvenHeaderTab';
import PagerView from 'react-native-pager-view';

const GasSection = ({
  gasData,
  addNewOvenDeckData,
  ovenTabChange,
  updateOvenBoxTimerValue,
  removeOvenDeck,
  startAllTimer,
  stopAllOvenTimer,
  updateOvenDeckBoxTimeValue,
  editOvenBoxTimeValue,
}) => {
  const ref = React.useRef(PagerView);
  const onViewPager = event => {
    ovenTabChange(event.nativeEvent.position);
  };
  const onTabChangePager = index => {
    ref.current.setPage(index);
  };
  return (
    <>
      <OvenHeaderTab
        ovenData={gasData}
        addNewOvenDeckData={addNewOvenDeckData}
        ovenTabChange={onTabChangePager}
      />
      <PagerView
        ref={ref}
        style={{
          flex: 1,
        }}
        onPageSelected={onViewPager}
        initialPage={gasData?.selectedDeck}>
        {gasData.decks.map((element, deckIndex, array) => {
          return (
            <BoxesList
              key={deckIndex}
              deckIndex={deckIndex}
              hide={gasData?.selectedDeck !== deckIndex}
              selectedDeck={gasData?.selectedDeck}
              removeOvenDeck={removeOvenDeck}
              deckData={gasData?.decks[deckIndex]?.deckBoxes}
              addNewOvenDeckData={addNewOvenDeckData}
              updateOvenBoxTimerValue={updateOvenBoxTimerValue}
              startAllTimer={startAllTimer}
              stopAllOvenTimer={stopAllOvenTimer}
              updateOvenDeckBoxTimeValue={updateOvenDeckBoxTimeValue}
              editOvenBoxTimeValue={editOvenBoxTimeValue}
            />
          );
        })}
      </PagerView>
    </>
  );
};

export default GasSection;

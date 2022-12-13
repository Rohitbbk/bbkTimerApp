import React, {useRef} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import BoxesList from '../molecules/boxes/BoxesList';
import OvenHeaderTab from '../molecules/tabs/OvenHeaderTab';
import PagerView from 'react-native-pager-view';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const OvenSection = ({
  ovenData,
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
    ovenTabChange(event.nativeEvent.position, 'oven');
  };
  const onTabChangePager = index => {
    ref.current.setPageWithoutAnimation(index);
  };
  return (
    <>
      <OvenHeaderTab
        tabType={'oven'}
        ovenData={ovenData}
        addNewOvenDeckData={addNewOvenDeckData}
        ovenTabChange={onTabChangePager}
      />
      <PagerView
        ref={ref}
        style={{
          flex: 1,
        }}
        onPageSelected={onViewPager}
        initialPage={ovenData?.selectedDeck}>
        {ovenData.decks.map((element, deckIndex, array) => {
          return (
            <BoxesList
              tabType={'oven'}
              key={deckIndex}
              deckIndex={deckIndex}
              hide={ovenData?.selectedDeck !== deckIndex}
              selectedDeck={ovenData?.selectedDeck}
              removeOvenDeck={removeOvenDeck}
              deckData={ovenData?.decks[deckIndex]?.deckBoxes}
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

export default OvenSection;

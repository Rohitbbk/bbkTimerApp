import React from 'react';
import BoxesList from '../components/boxes/BoxesList';
import OvenHeaderTab from '../components/tabs/OvenHeaderTab';
import PagerView from 'react-native-pager-view';

const TabSection = ({
  data,
  addNewOvenDeckData,
  ovenTabChange,
  updateOvenBoxTimerValue,
  removeOvenDeck,
  startAllTimer,
  stopAllOvenTimer,
  updateOvenDeckBoxTimeValue,
  editOvenBoxTimeValue,
  isOven,
}) => {
  const ref = React.useRef(PagerView);
  React.useEffect(() => {
    ref.current.setPage(data?.selectedDeck);
  }, [isOven]);
  const onViewPager = event => {
    ovenTabChange(event.nativeEvent.position);
  };
  const onTabChangePager = index => {
    ref.current.setPage(index);
  };
  return (
    <>
      <OvenHeaderTab
        ovenData={data}
        addNewOvenDeckData={addNewOvenDeckData}
        ovenTabChange={onTabChangePager}
      />
      <PagerView
        ref={ref}
        style={{
          flex: 1,
        }}
        onPageSelected={onViewPager}
        initialPage={data?.selectedDeck}>
        {data.decks.map((element, deckIndex, array) => {
          return (
            <BoxesList
              isOven={isOven}
              key={deckIndex}
              deckIndex={deckIndex}
              hide={data?.selectedDeck !== deckIndex}
              selectedDeck={data?.selectedDeck}
              removeOvenDeck={removeOvenDeck}
              deckData={data?.decks[deckIndex]?.deckBoxes}
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

export default TabSection;

import * as React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Animated,
  ImageBackground,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {moderateScale} from '../../../../Utility/components/Metric';
import {
  oven2DeckBoxes,
  oven3DeckBoxes,
  oven4DeckBoxes,
  ovenDeckBoxes,
} from '../../utility/Utility';

import OvenBoxList from './OvenBoxList';

const FirstRoute = () => <OvenBoxList data={ovenDeckBoxes} />;
const SecondRoute = () => <OvenBoxList data={oven2DeckBoxes} />;
const ThirdRoute = () => <OvenBoxList data={oven3DeckBoxes} />;
const ForthRoute = () => <OvenBoxList data={oven4DeckBoxes} />;

const renderScene = SceneMap({
  Oven1: FirstRoute,
  Oven2: SecondRoute,
  Oven3: ThirdRoute,
  Oven4: ForthRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Oven1', title: 'Oven1'},
    {key: 'Oven2', title: 'Oven2'},
    {key: 'Oven3', title: 'Oven3'},
    {key: 'Oven4', title: 'Oven4'},
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#930433',
        }}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 16,
                borderBottomWidth: i === index ? 8 : 0,
                borderColor: 'white',
              }}
              onPress={() => setIndex(i)}>
              <Text
                style={{
                  color: i === index ? 'white' : '#D3D3D3',
                  fontSize: i === index ? moderateScale(16) : moderateScale(14),
                  fontFamily: 'bold',
                }}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
    />
  );
}

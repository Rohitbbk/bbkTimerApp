import * as React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {moderateScale} from '../../../../Utility/components/Metric';
import {
  gas1DeckBoxes,
  gas2DeckBoxes,
  gas3DeckBoxes,
  gas4DeckBoxes,
} from '../../utility/Utility';

import GasBoxList from './GasBoxList';

const FirstRoute = () => <GasBoxList data={gas1DeckBoxes} />;
const SecondRoute = () => <GasBoxList data={gas2DeckBoxes} />;
const ThirdRoute = () => <GasBoxList data={gas3DeckBoxes} />;
const ForthRoute = () => <GasBoxList data={gas4DeckBoxes} />;

const renderScene = SceneMap({
  Gas1: FirstRoute,
  Gas2: SecondRoute,
  Gas3: ThirdRoute,
  Gas4: ForthRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Gas1', title: 'Gas1'},
    {key: 'Gas2', title: 'Gas2'},
    {key: 'Gas3', title: 'Gas3'},
    {key: 'Gas4', title: 'Gas4'},
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

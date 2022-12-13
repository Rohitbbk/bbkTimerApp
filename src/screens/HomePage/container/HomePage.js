import * as React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  BackHandler,
  Alert,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import OvenSection from '../molecules/OvenSection/index';
import GasSection from '../molecules/GasSection/index';
import CustomStatusBar from '../../CustomStatusBar';

const renderScene = SceneMap({
  Oven: OvenSection,
  Gas: GasSection,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Oven', title: 'Oven'},
    {key: 'Gas', title: 'Gas'},
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#930433',
          borderColor: 'white',
          borderBottomWidth: 2,
        }}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 16,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'white',

                margin: 8,
                backgroundColor: i === index ? 'white' : 'transparent',
              }}
              onPress={() => setIndex(i)}>
              <Text
                style={{
                  color: i === index ? 'black' : 'white',
                  fontSize: i === index ? 26 : 24,
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
    <>
      <CustomStatusBar />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
        initialLayout={{width: layout.width}}
      />
    </>
  );
}

// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {Modal, View, Text, ActivityIndicator, LogBox} from 'react-native';
import CodePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/screens/Login/LoginPage';
import DashboardScreen from './src/screens/Dashboard/container/DashboardScreen';
import HomPage from './src/screens/HomePage/container/HomePage';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

Sentry.init({
  dsn: 'https://96110077a058464d9496d9c3207abe4a@o4504254374019072.ingest.sentry.io/4504254398201856',
});

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [progress, setProgress] = useState(false);
  useEffect(() => {
    CodePush.sync(
      {
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange,
      codePushDownloadDidProgress,
    );
  }, []);

  const codePushStatusDidChange = syncStatus => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('syncStatus message', 'Checking for update.');

        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('syncStatus message', 'Downloading package.');

        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('syncStatus message', 'Awaiting user action.');

        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('syncStatus message', 'Installing update.');

        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log('syncStatus message', 'App up to date.');
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        console.log('syncStatus message', 'Update cancelled by user.');
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log(
          'syncStatus message',
          'Update installed and will be applied on restart.',
        );
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('syncStatus message', 'An unknown error occurred.');
        // setProgress(false);
        break;
    }
  };

  const codePushDownloadDidProgress = progress => {
    setProgress(progress);
  };

  const showProgressModal = () => {
    return (
      <Modal visible={true} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            width: '100%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 16,
            }}>
            <Text>In Progress.......</Text>

            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 16}}>{`${(
                Number(progress?.receivedBytes) / 1048576
              ).toFixed(2)}MB/${(
                Number(progress?.totalBytes) / 1048576
              ).toFixed(2)}`}</Text>
              <ActivityIndicator style={{marginVertical: 8}} color={'blue'} />
              <Text>
                {(
                  (Number(progress?.receivedBytes) /
                    Number(progress?.totalBytes)) *
                  100
                ).toFixed(0)}
                %
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <AppNavigation />
      {!!progress ? showProgressModal() : null}
    </>
  );
};

const CodePushApp = CodePush(codePushOptions)(App);

export default Sentry.wrap(CodePushApp);

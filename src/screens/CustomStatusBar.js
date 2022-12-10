import React, {useState} from 'react';
import {StatusBar} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const CustomStatusBar = () => {
  const [hidden] = useState(false);
  const [statusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition] = useState(TRANSITIONS[0]);

  return (
    <StatusBar
      animated={true}
      backgroundColor="#930433"
      barStyle={statusBarStyle}
      showHideTransition={statusBarTransition}
      hidden={hidden}
    />
  );
};

export default CustomStatusBar;

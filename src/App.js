import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes';
import {StatusBar} from 'react-native';
import {HeaderBackground} from '@react-navigation/stack';

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#111" barStyle={'light-content'} />
    </>
  );
};

export default App;

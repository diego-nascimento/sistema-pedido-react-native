import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Store from './store/index';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Routes />
      </Provider>
      <StatusBar backgroundColor="#111" barStyle={'light-content'} />
    </>
  );
};

export default App;

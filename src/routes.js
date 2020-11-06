import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

import Produtos from './pages/Produtos/produtos';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: 0}}>
        <Stack.Screen name="produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

import Categorias from './pages/Categorias/Categorias';
import Produtos from './pages/Produtos/produtos';
import Cart from './pages/Cart/Cart';
import Dados from './pages/Dados/Dados';
import Finalizado from './pages/PedidoFinalizado/PedidoFinalizado';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: 0}}
        initialRouteName="Categorias">
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Dados" component={Dados} />
        <Stack.Screen name="Finalizado" component={Finalizado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

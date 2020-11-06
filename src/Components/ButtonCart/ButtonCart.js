import React from 'react';
import {Container} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonCart = ({navigation}) => {
  return (
    <Container onPress={() => navigation.push('Cart')}>
      <Icon name="shopping-cart" size={25} color="#111" />
    </Container>
  );
};

export default ButtonCart;

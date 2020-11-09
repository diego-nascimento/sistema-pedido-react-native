import React from 'react';
import {Container, LittleView, Numero} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

const ButtonCart = ({navigation, tamanho_carrinho}) => {
  return (
    <Container onPress={() => navigation.push('Cart')}>
      <Icon name="shopping-cart" size={25} color="#111" />
      <LittleView>
        <Numero>{tamanho_carrinho}</Numero>
      </LittleView>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  tamanho_carrinho: state.cart.length,
});

export default connect(mapStateToProps)(ButtonCart);

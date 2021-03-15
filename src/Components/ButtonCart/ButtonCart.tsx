import React from 'react';
import {Container, LittleView, Numero} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {ToastAndroid} from 'react-native';

interface ICart {
  navigation: any;
  tamanho_carrinho: number;
}

const ButtonCart: React.FC<ICart> = ({navigation, tamanho_carrinho}) => {
  function NavegarPagina() {
    if (tamanho_carrinho === 0) {
      ToastAndroid.show('Carrinho está Vazio !', ToastAndroid.CENTER);
    } else {
      navigation.push('Cart');
    }
  }

  return (
    <Container onPress={() => NavegarPagina()}>
      <Icon name="shopping-cart" size={25} color="#111" />
      <LittleView>
        <Numero>{tamanho_carrinho}</Numero>
      </LittleView>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  tamanho_carrinho: state.cart.length,
});

export default connect(mapStateToProps)(ButtonCart);

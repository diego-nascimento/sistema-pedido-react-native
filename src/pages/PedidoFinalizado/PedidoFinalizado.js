import React from 'react';

import {
  Wrapper,
  Titulo,
  FraseBanner,
  Container,
  ContainerBanner,
  ContainerFinalizar,
  BotaoFinalizar,
  TextoFinalizar,
} from './style';

import Icons from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

const Finalizado = (props) => {
  React.useEffect(() => {
    props.dispatch(CartActions.LimparCarrinho());
  });
  return (
    <Wrapper contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <Container>
        <Icons name="check" size={150} color="green" />
        <Titulo>Pedido Finalizado!</Titulo>
        <ContainerBanner>
          <FraseBanner>
            Seu Pedido foi registrado e será preparado em breve!
          </FraseBanner>
        </ContainerBanner>
        <ContainerFinalizar>
          <BotaoFinalizar
            onPress={() => props.navigation.navigate('Categorias')}>
            <TextoFinalizar>Novo Pedido</TextoFinalizar>
          </BotaoFinalizar>
        </ContainerFinalizar>
      </Container>
    </Wrapper>
  );
};

export default connect()(Finalizado);

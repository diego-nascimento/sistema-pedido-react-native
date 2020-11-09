import React from 'react';

import {
  Wrapper,
  List,
  ItemContainer,
  ImageItem,
  ContainerTextsItems,
  TituloItem,
  PrecoQuantidade,
  HeaderTitulo,
  Titulo,
  Total,
  Container,
} from './style';
import {connect} from 'react-redux';
import {TouchableHighlight} from 'react-native';
import CurrencyFormatter from 'react-native-currency-format';

const Cart = ({produtos, total}) => {
  function renderItem({item: produto}) {
    return (
      <>
        <TouchableHighlight>
          <ItemContainer>
            <ImageItem source={{uri: produto.foto_id.url}} />
            <ContainerTextsItems>
              <TituloItem>{produto.nome}</TituloItem>
              <PrecoQuantidade> R$ {produto.preco}</PrecoQuantidade>
              <PrecoQuantidade>
                Quantidade: {produto.quantidade}
              </PrecoQuantidade>
              <TituloItem>
                SubTotal: R$ {produto.subtotal.toFixed(2)}
              </TituloItem>
            </ContainerTextsItems>
          </ItemContainer>
        </TouchableHighlight>
      </>
    );
  }

  return (
    <Wrapper>
      <Container>
        <HeaderTitulo>
          <Titulo>Meu Pedido</Titulo>
          <Total>
            Total: R$
            {total.toFixed(2)}
          </Total>
        </HeaderTitulo>
        <List
          data={produtos}
          keyExtractor={(produto) => produto._id}
          renderItem={renderItem}
        />
      </Container>
    </Wrapper>
  );
};

const StateToProps = (state) => ({
  produtos: state.cart.map((produto) => ({
    ...produto,
    subtotal: produto.preco * produto.quantidade,
  })),

  total: state.cart.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade;
  }, 0),
});

export default connect(StateToProps)(Cart);

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
  BotaoVoltar,
  BotaoFinalizar,
  ContainerFinalizar,
  TextoFinalizar,
  Quantidade,
  AlterarQuantidade,
} from './style';
import {connect} from 'react-redux';
import {Animated} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as CartActions from '../../store/modules/cart/actions';

const Cart = ({produtos, total, navigation, dispatch}) => {
  const [ItemsAnimation] = React.useState(new Animated.Value(100));

  React.useEffect(() => {
    Animated.spring(ItemsAnimation, {
      toValue: 0,
      speed: 10,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [ItemsAnimation]);

  function addProduto(produto) {
    dispatch(CartActions.AdicionarAoCarrinho(produto));
  }

  function RemoveProduto(produto) {
    dispatch(CartActions.RemoverDoCarrinho(produto._id));
  }

  function renderItem({item: produto}) {
    return (
      <>
        <ItemContainer style={{transform: [{translateX: ItemsAnimation}]}}>
          <ImageItem source={{uri: produto.foto_id.url}} />
          <ContainerTextsItems>
            <TituloItem>{produto.nome}</TituloItem>
            <PrecoQuantidade> R$ {produto.preco}</PrecoQuantidade>
            <TituloItem>SubTotal: R$ {produto.subtotal.toFixed(2)}</TituloItem>
          </ContainerTextsItems>
          <AlterarQuantidade>
            <TouchableWithoutFeedback onPress={() => addProduto(produto)}>
              <Icons name="sort-up" size={25} />
            </TouchableWithoutFeedback>
            <Quantidade>{produto.quantidade}</Quantidade>
            <TouchableWithoutFeedback onPress={() => RemoveProduto(produto)}>
              <Icons name="sort-down" size={25} />
            </TouchableWithoutFeedback>
          </AlterarQuantidade>
        </ItemContainer>
      </>
    );
  }

  return (
    <Wrapper>
      <Container>
        <HeaderTitulo>
          <BotaoVoltar onPress={() => navigation.navigate('Categorias')}>
            <Icons name="arrow-left" size={25} color="white" />
          </BotaoVoltar>
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
          alwaysBounceHorizontal={true}
        />
        <ContainerFinalizar>
          <BotaoFinalizar>
            <TextoFinalizar>Finalizar</TextoFinalizar>
          </BotaoFinalizar>
        </ContainerFinalizar>
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

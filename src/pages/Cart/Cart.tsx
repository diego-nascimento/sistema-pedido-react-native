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
import {IProduto} from '../../Interfaces/IProduto';

interface ICart {
  produtos: Array<IProduto>;
  total: number;
  navigation: any;
  dispatch: any;
}

const Cart: React.FC<ICart> = ({produtos, total, navigation, dispatch}) => {
  const [ItemsAnimation] = React.useState(new Animated.Value(100));

  React.useEffect(() => {
    Animated.spring(ItemsAnimation, {
      toValue: 0,
      speed: 10,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [ItemsAnimation]);

  const addProduto = (produto: IProduto) => {
    dispatch(CartActions.AdicionarAoCarrinho(produto));
  };

  const RemoveProduto = (produto: IProduto) => {
    dispatch(CartActions.RemoverDoCarrinho(produto._id));
  };

  function renderItem(produto: IProduto) {
    return (
      <>
        <ItemContainer style={{ transform: [{ translateX: ItemsAnimation }] }}>
          <ImageItem source={{uri: produto.foto_id.url}} />
          <ContainerTextsItems>
            <TituloItem>{produto.nome}</TituloItem>
            <PrecoQuantidade> R$ {produto.preco}</PrecoQuantidade>
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
          keyExtractor={(produto: IProduto) => produto._id}
          renderItem={({item}:any) => renderItem(item)}
          alwaysBounceHorizontal={true}
        />
        <ContainerFinalizar>
          <BotaoFinalizar
            disabled={total > 0 ? false : true}
            Estado={total > 0 ? false : true}
            onPress={() => navigation.navigate('Dados')}>
            <TextoFinalizar>CheckOut</TextoFinalizar>
          </BotaoFinalizar>
        </ContainerFinalizar>
      </Container>
    </Wrapper>
  );
};

const StateToProps = (state: any) => ({
  produtos: state.cart.map((produto: IProduto) => ({
    ...produto,
    subtotal: produto.preco * produto.quantidade,
  })),

  total: state.cart.reduce((total: number, produto: IProduto) => {
    return total + produto.preco * produto.quantidade;
  }, 0),
});

export default connect(StateToProps)(Cart);

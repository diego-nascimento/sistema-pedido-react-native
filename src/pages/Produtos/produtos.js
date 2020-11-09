import React from 'react';
import Api from '../../services/api';
import Header from '../../Components/Header/header';
import {
  TitlePage,
  TextTitlePage,
  ProdutosStyle,
  ItemContainer,
  ImageItem,
  DescricaoItem,
  ContainerTextsItems,
  TituloItem,
  Icons,
} from './style';

import {connect} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import ButtonCard from '../../Components/ButtonCart/ButtonCart';

const Produtos = ({route, navigation, dispatch}) => {
  const [categoria, setCategoria] = React.useState(route.params.categoria);
  const [produtos, setProdutos] = React.useState([]);
  const [ItemPosition] = React.useState(new Animated.Value(200));

  React.useEffect(() => {
    setCategoria(route.params.categoria);
  }, [route.params.categoria]);

  React.useEffect(() => {
    Api.get('produtos/categoria', {
      params: {
        categoria_id: categoria,
      },
    }).then((response) => {
      setProdutos(response.data);
    });
  }, [categoria]);

  function addProduto(produto) {
    dispatch(CartActions.AdicionarAoCarrinho(produto));
  }

  function renderItem({item}) {
    Animated.spring(ItemPosition, {
      toValue: 0,
      bounciness: 20,
      speed: 10,
      useNativeDriver: true,
    }).start();
    return (
      <TouchableHighlight onPress={() => addProduto(item)}>
        <ItemContainer style={{transform: [{translateX: ItemPosition}]}}>
          <ImageItem source={{uri: item.foto_id.url}} />
          <ContainerTextsItems>
            <TituloItem>{item.nome}</TituloItem>
            <DescricaoItem> {item.descricao}</DescricaoItem>
          </ContainerTextsItems>
        </ItemContainer>
      </TouchableHighlight>
    );
  }

  return (
    <>
      <Header />
      <TitlePage>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Categorias')}>
          <Icons name="arrow-left" size={25} color="white" />
        </TouchableWithoutFeedback>

        <TextTitlePage>Produtos</TextTitlePage>
      </TitlePage>
      <ProdutosStyle
        data={produtos}
        keyExtractor={(produto) => produto._id}
        renderItem={renderItem}
      />
      <ButtonCard navigation={navigation} />
    </>
  );
};

export default connect()(Produtos);

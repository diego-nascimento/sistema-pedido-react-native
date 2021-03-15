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
  Preco,
} from './style';

import {connect} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import ButtonCard from '../../Components/ButtonCart/ButtonCart';
import {IProduto} from '../../Interfaces/IProduto';

interface IProdutoPage {
  route: any;
  navigation: any;
  dispatch: any;
}

interface IItem {
  item: IProduto;
}

const Produtos: React.FC<IProdutoPage> = ({route, navigation, dispatch}) => {
  const [categoria, setCategoria] = React.useState(route.params.categoria);
  const [produtos, setProdutos] = React.useState(null);
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

  const addProduto = (produto: IProduto) => {
    dispatch(CartActions.AdicionarAoCarrinho(produto));
  };

  const renderItem = ({item}: IItem) => {
    Animated.spring(ItemPosition, {
      toValue: 0,
      bounciness: 20,
      speed: 10,
      useNativeDriver: true,
    }).start();
    return (
      produtos && (
        <TouchableHighlight onPress={() => addProduto(item)}>
          <ItemContainer style={{transform: [{translateX: ItemPosition}]}}>
            <ImageItem source={{uri: item.foto_id.url}} />
            <ContainerTextsItems>
              <TituloItem>{item.nome}</TituloItem>
              <DescricaoItem> {item.descricao}</DescricaoItem>
              <Preco>{'R$' + item.preco}</Preco>
            </ContainerTextsItems>
          </ItemContainer>
        </TouchableHighlight>
      )
    );
  };

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
        keyExtractor={(produto: IProduto) => produto._id}
        renderItem={renderItem}
      />
      <ButtonCard navigation={navigation} />
    </>
  );
};

export default connect()(Produtos);

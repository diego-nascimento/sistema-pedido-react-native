import React from 'react';
import Api from '../../services/api';
import Header from '../../Components/Header/header';
import {
  TitlePage,
  TextTitlePage,
  CategoriaStyle,
  ItemContainer,
  ImageItem,
  DescricaoItem,
  ContainerTextsItems,
  TituloItem,
} from './style';

import {TouchableHighlight, Animated} from 'react-native';
import ButtonCard from '../../Components/ButtonCart/ButtonCart';
import {ICategoria} from '../../Interfaces/ICategoria';

interface ICategoriasPage {
  navigation: any;
}

interface IItem {
  item: ICategoria;
}

const Categorias: React.FC<ICategoriasPage> = ({navigation}) => {
  const [categorias, setCategorias] = React.useState(null);
  const [ItemPosition] = React.useState(new Animated.Value(300));

  React.useEffect(() => {
    Api.get('categorias').then((response) => {
      setCategorias(response.data);
    });
  }, []);

  React.useEffect(() => {
    Animated.spring(ItemPosition, {
      toValue: 0,
      bounciness: 30,
      speed: 10,
      useNativeDriver: true,
    }).start();
  });

  const NavigateToProduto = (item: ICategoria) => {
    navigation.navigate('Produtos', {categoria: item._id});
  };

  const renderItem = ({item}: IItem) => {
    return (
      categorias && (
        <TouchableHighlight onPress={() => NavigateToProduto(item)}>
          <ItemContainer
            style={{
              transform: [{translateY: ItemPosition}],
            }}>
            <ImageItem source={{uri: item.foto_id.url}} />
            <ContainerTextsItems>
              <TituloItem>{item.nome}</TituloItem>
              <DescricaoItem> {item.descricao}</DescricaoItem>
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
        <TextTitlePage>Categorias</TextTitlePage>
      </TitlePage>
      <CategoriaStyle
        data={categorias}
        keyExtractor={(categoria: ICategoria) => categoria._id}
        renderItem={renderItem}
      />
      <ButtonCard navigation={navigation} />
    </>
  );
};

export default Categorias;

import styled from 'styled-components/native';
import Icone from 'react-native-vector-icons/FontAwesome';
import {Animated} from 'react-native';

export const TitlePage = styled.View`
  width: 100%;
  height: 40px;
  background: #111;
  align-items: center;
  justify-content: center;
`;

export const TextTitlePage = styled.Text`
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Courgette';
`;

export const ProdutosStyle = styled.FlatList`
  margin-top: 20px;
`;

export const ItemContainer = styled(Animated.View)`
  width: 100%;
  padding: 20px;
  border: 1px solid black;
  flex-direction: row;
  align-items: center;
  background: rgba(0,128,0, .7);
`;

export const ImageItem = styled.Image`
  height: 50px;
  width: 80px;
  border-radius: 7px;
`;

export const ContainerTextsItems = styled.View`
  justify-content: space-around;
  padding-left: 10px;
  flex: 1;
`;
export const TituloItem = styled.Text`
  font-size: 25px;
  text-transform: capitalize;
  font-family: 'Courgette';
`;
export const DescricaoItem = styled.Text`
  flex: 1;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'RobotoSlab-Medium';
`;

export const Preco = styled.Text`
  flex: 1;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
`;

export const Icons = styled(Icone)`
  position: absolute;
  left: 20px;
`;

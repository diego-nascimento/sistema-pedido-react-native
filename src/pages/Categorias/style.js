import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const TitlePage = styled.View`
  width: 100%;
  height: 40px;
  background: #111;
  align-items: center;
  justify-content: center;
`;

export const TextTitlePage = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const CategoriaStyle = styled.FlatList`
  margin-top: 20px;
`;

export const ItemContainer = styled(Animated.View)`
  width: 100%;
  padding: 20px;
  border: solid black;
  border-width: ${StyleSheet.hairlineWidth + 'px'};
  flex-direction: row;
  align-items: center;
  background-color: red;
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
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const DescricaoItem = styled.Text`
  flex: 1;
`;

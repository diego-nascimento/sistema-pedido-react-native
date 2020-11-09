import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Wrapper = styled.View`
  background: green;
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 95%;
  height: 95%;
`;

export const HeaderTitulo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-width: 1px;
  padding: 5px 0px;
`;

export const Titulo = styled.Text`
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: bold;
`;
export const Total = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const List = styled.FlatList`
  width: 100%;
  background: white;
  margin-bottom: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ItemContainer = styled.View`
  width: 97%;
  padding: 20px;
  border: solid black;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  margin: 5px 3px 5px 3px;
`;

export const ImageItem = styled.Image`
  width: 80px;
  height: 60px;
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
export const PrecoQuantidade = styled.Text`
  flex: 1;
`;

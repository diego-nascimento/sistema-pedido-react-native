import styled from 'styled-components/native';
import {Animated} from 'react-native';

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
  width: 96%;
  align-self: center;
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
`;

export const ItemContainer = styled(Animated.View)`
  width: 97%;
  padding: 20px;
  border: solid black;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  margin: 5px 3px 5px 3px;
`;

export const ImageItem = styled.Image`
  width: 30px;
  height: 30px;
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
  font-size: 16px;
`;

export const BotaoVoltar = styled.TouchableHighlight`
  position: absolute;
  align-self: flex-start;
  left: 20px;
  padding: 10px;
  border-radius: 50px;
  background: black;
`;

export const ContainerFinalizar = styled.View`
  width: 96%;
  align-self: center;
  background: white;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  align-items: center;
  border: solid black;
  border-width: 1px;
  padding-top: 10px;
`;

export const BotaoFinalizar = styled.TouchableOpacity`
  width: 90%;
  padding: 20px;
  background: black;
  margin-bottom: 10px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextoFinalizar = styled.Text`
  color: white;
  font-size: 16px;
`;

export const AlterarQuantidade = styled.View`
  align-items: center;
`;
export const Quantidade = styled.Text`
  font-size: 14px;
  border: solid black;
  padding: 5px 10px;
`;

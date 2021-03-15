import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Wrapper = styled.KeyboardAvoidingView`
  background: white;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Container = styled.ScrollView`
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
  padding: 15px 0px;
`;

export const Titulo = styled.Text`
  font-size: 30px;
  letter-spacing: 2px;
  font-family: 'Courgette';
`;
export const Total = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'RobotoSlab-Regular';
`;

export const FormularioContainer = styled.View`
  width: 100%;
  background: white;
`;

export const BotaoVoltar = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-start;
  left: 20px;
  padding: 10px;
  border-radius: 50px;
  background: black;
`;

export const Campo = styled.TextInput`
  margin: 10px 5px;
  height: 45px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  padding: 0px 10px;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'RobotoSlab-Regular';
`;

export const ContainerFinalizar = styled.View`
  width: 96%;
  align-self: center;
  background: white;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  align-items: center;
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
  font-size: 20px;
  font-family: 'Courgette';
  letter-spacing: 3px;
`;

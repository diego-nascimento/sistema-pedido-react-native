import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background: white;
  width: 100%;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Titulo = styled.Text`
  font-size: 40px;
  letter-spacing: 2px;
  font-family: 'Courgette';
  color: black;
  margin: 5px 0px 10px 0px;
  text-align: center;
`;

export const ContainerBanner = styled.View`
  width: 100%;
  background: black;
  padding: 50px 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const FraseBanner = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'RobotoSlab-Regular';
  color: white;
  text-align: center;
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
  padding-top: 10px;
`;

export const BotaoFinalizar = styled.TouchableOpacity`
  width: 90%;
  padding: 20px;
  color: black;
  margin-bottom: 10px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const TextoFinalizar = styled.Text`
  color: black;
  font-size: 25px;
  font-family: 'Courgette';
  letter-spacing: 3px;
`;

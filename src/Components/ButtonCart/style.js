import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  border: 2px solid black;
  position: absolute;
  background-color: white;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const LittleView = styled.View`
  position: absolute;
  width: 17px;
  height: 17px;
  background: green;
  bottom: -2px;
  right: -2px;
  border-radius: 7.5px;
  align-items: center;
  justify-content: center;
`;

export const Numero = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

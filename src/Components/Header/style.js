import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: green;
  height: 150px;
`;

export const ContainerContato = styled.View`
  background-color: #111;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Contatos = styled.View`
  flex-direction: row;
  height: 100%;
`;

export const Contato = styled.View`
  color: #ddd;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 10px;
`;

export const Numero = styled.Text`
  color: #ddd;
  font-size: 12px;
`;

export const Social = styled.View`
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;

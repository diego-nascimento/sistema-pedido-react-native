import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Wrapper,
  HeaderTitulo,
  Titulo,
  Container,
  BotaoVoltar,
  BotaoFinalizar,
  ContainerFinalizar,
  TextoFinalizar,
  FormularioContainer,
  Campo,
} from './style';
import {withFormik} from 'formik';

import Icons from 'react-native-vector-icons/FontAwesome';

const Dados = (props) => {
  function HandleFinalizar() {
    props.navigation.navigate('Finalizado');
  }
  return (
    <Wrapper contentContainerStyle={styles.contentContainer}>
      <Container>
        <HeaderTitulo>
          <BotaoVoltar onPress={() => props.navigation.navigate('Cart')}>
            <Icons name="arrow-left" size={25} color="white" />
          </BotaoVoltar>
          <Titulo>Dados de Envio</Titulo>
        </HeaderTitulo>
        <FormularioContainer>
          <Campo
            value={props.values.Nome}
            placeholder="Digite seu Nome"
            onChangeText={(text) => props.setFieldValue('Nome', text)}
          />
          <Campo
            value={props.values.Telefone}
            placeholder="Digite seu Telefone"
            onChangeText={(text) => props.setFieldValue('Telefone', text)}
            keyboardType={'numeric'}
          />

          <Campo
            value={props.values.Email}
            placeholder="Digite seu Email"
            onChangeText={(text) => props.setFieldValue('Email', text)}
          />

          <Campo
            value={props.values.Rua}
            placeholder="Rua"
            onChangeText={(text) => props.setFieldValue('Rua', text)}
          />
          <Campo
            keyboardType={'numeric'}
            value={props.values.Numero}
            placeholder="Numero"
            onChangeText={(text) => props.setFieldValue('Numero', text)}
          />

          <Campo
            value={props.values.Bairro}
            placeholder="Bairro"
            onChangeText={(text) => props.setFieldValue('Bairro', text)}
          />
        </FormularioContainer>
        <ContainerFinalizar>
          <BotaoFinalizar onPress={() => HandleFinalizar()}>
            <TextoFinalizar>Finalizar</TextoFinalizar>
          </BotaoFinalizar>
        </ContainerFinalizar>
      </Container>
    </Wrapper>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    Nome: '',
    Telefone: '',
    Email: '',
    Rua: '',
    Numero: '',
    Bairro: '',
  }),
  handleSubmit: (values) => {
    console.log(values);
  },
})(Dados);

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

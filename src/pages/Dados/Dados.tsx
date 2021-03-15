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

import Icons from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from 'react-hook-form';

interface IDados {
  navigation: any;
}

interface IDadosEnvio{
  nome: string,
  telefone: string,
  email: string,
  rua: string,
  numero: string,
  bairro: string
}

const Dados: React.FC<IDados> = ({navigation}) => {
  const { control, handleSubmit } = useForm();
  
  const HandleFinalizar = (data: IDadosEnvio) => {
    console.log(data)
    navigation.navigate('Finalizado');
  };
  return (
    <Wrapper contentContainerStyle={styles.contentContainer}>
      <Container>
        <HeaderTitulo>
          <BotaoVoltar onPress={() => navigation.navigate('Cart')}>
            <Icons name="arrow-left" size={25} color="white" />
          </BotaoVoltar>
          <Titulo>Dados de Envio</Titulo>
        </HeaderTitulo>
        <FormularioContainer>
          <Controller
            control={control}
              render={({ onChange, onBlur, value }) => (
                <Campo name="Nome" onBlur={onBlur}  value={value} onChangeText={(value: string ) => onChange(value)} placeholder="Digite seu Nome"  />
            )}
            name="Nome"
            defaultValue=""
          />

          <Controller
            control={control}
              render={({ onChange, onBlur, value }) => (
                <Campo name="Telefone" onBlur={onBlur}  value={value} onChangeText={(value: string ) => onChange(value)} placeholder="Digite seu Telefone"  />
            )}
            name="Telefone"
            defaultValue=""
          />
          
          <Controller
            control={control}
              render={({ onChange, onBlur, value }) => (
                <Campo name="Email" onBlur={onBlur}  value={value} onChangeText={(value: string ) => onChange(value)} placeholder="Digite seu Email"  />
            )}
            name="Email"
            defaultValue=""
          />

          <Controller
            control={control}
              render={({ onChange, onBlur, value }) => (
                <Campo name="Rua" onBlur={onBlur} value={value} onChangeText={(value: string ) => onChange(value)} placeholder="Digite seu Rua"  />
            )}
            name="Rua"
            defaultValue=""
          />

          <Controller
            control={control}
              render={({ onChange, onBlur, value }) => (
                <Campo name="Bairro" onBlur={onBlur}  value={value} onChangeText={(value: string ) => onChange(value)} placeholder="Digite seu Bairro"  />
            )}
            name="Bairro"
            defaultValue=""
          />
        </FormularioContainer>
        <ContainerFinalizar >
          <BotaoFinalizar onPress={handleSubmit(HandleFinalizar)}>
            <TextoFinalizar>Finalizar</TextoFinalizar>
          </BotaoFinalizar>
        </ContainerFinalizar>
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dados;

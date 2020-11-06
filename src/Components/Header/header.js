import React from 'react';
import {
  Wrapper,
  ContainerContato,
  Contatos,
  Contato,
  Numero,
  Social,
  ContainerLogo,
  Logo,
  TextoLogo,
} from './style';

import Icons from 'react-native-vector-icons/FontAwesome5';
import {Linking, TouchableWithoutFeedback} from 'react-native';

import {Text} from 'react-native';

import api from '../../services/api';

const Header = () => {
  const [empresa, setEmpresa] = React.useState([]);

  async function feedEmpresa() {
    const response = await api.get('/empresa');

    setEmpresa(response.data);
  }

  React.useEffect(() => {
    feedEmpresa();
  }, []);

  return empresa !== null ? (
    <>
      <ContainerContato>
        <Contatos>
          <Contato>
            <Icons name="phone" size={12} color="#fff" />
            <Numero> 32 3573-1900</Numero>
          </Contato>

          <Contato>
            <Icons name="whatsapp" size={12} color="#fff" />
            <Numero> 32 9-9910-7767</Numero>
          </Contato>
        </Contatos>
        <Contatos style={{marginRight: 10}}>
          <TouchableWithoutFeedback>
            <Social>
              <Icons
                name="facebook-f"
                size={20}
                color="#fff"
                style={{marginRight: 25}}
              />
            </Social>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Social>
              <Icons name="instagram" size={20} color="#fff" />
            </Social>
          </TouchableWithoutFeedback>
        </Contatos>
      </ContainerContato>
      <ContainerLogo>
        <Logo source={require('../../assets/RPC-JP_Logo.png')} />
        <TextoLogo>{empresa.nome}</TextoLogo>
      </ContainerLogo>
    </>
  ) : (
    <Text>Carregando...</Text>
  );
};

export default Header;

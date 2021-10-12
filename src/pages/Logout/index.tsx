import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Header from '../../components/Header';
import LogoutModal  from '../../components/Modal/LogoutModal';
import wallpaper from '../../assets/wallpapers/wallpaper20.svg';
import {
  Container,
} from './styles';

export function Logout({navigation}: {navigation: any}) {
  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <Container>
          <Header
            title='Logout'
            headerSize={'small'}
            onPress={() => navigation.openDrawer()}
          />
          <LogoutModal
            svg={wallpaper}
            title='Vai foldar bem agora?'
            firstLabel='Logout'
            secondLabel='Cancelar'
          />
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};


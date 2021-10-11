import React from 'react';
import {KeyboardAvoidingView, Text, Pressable} from 'react-native';
import Header from '../../components/Header';
import {
  Container,
  ContentContainer,
  MainContent,
  Content
} from './styles';

export function NewGame({navigation}: {navigation: any}) {
  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <Container>
          <Header
            title='New Game'
            headerSize={'small'}
            onPress={() => navigation.openDrawer()}
          />
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};


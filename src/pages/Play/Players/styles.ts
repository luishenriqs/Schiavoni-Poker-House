import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { IPlayersList } from '.';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: ${({ theme }) => theme.colors.dark };
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const GamesList = styled(
    FlatList as new () => FlatList<IPlayersList>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    },
  })``;
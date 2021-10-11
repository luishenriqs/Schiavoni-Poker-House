import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { IGamesProps } from '.';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const GamesList = styled(
  FlatList as new () => FlatList<IGamesProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: getBottomSpace()
  },
})``;
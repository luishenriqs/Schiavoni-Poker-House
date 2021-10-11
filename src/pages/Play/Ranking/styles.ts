import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { IRankingProps } from '.';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundDark };
`;

export const LabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 0 25px;
`;

export const StatusList = styled(
  FlatList as new () => FlatList<IRankingProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: getBottomSpace()
  },
})``;


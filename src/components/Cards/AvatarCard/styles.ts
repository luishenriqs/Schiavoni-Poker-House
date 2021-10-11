import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width};
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 320px;
  align-items: center;
  justify-content: center;
`;

export const GameSheet = styled.View`
  width: 75%;
  align-items: center;
  margin-top: ${RFValue(50)}px;
  padding: 8px 0;
  border-radius: 25px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gold };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
`;

import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { LabelProps } from '.';


export const LabelCard = styled.View<LabelProps>`
  width: 15%;
  margin: 3px;
  padding: 3px 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary };
  align-items: center;
  background: ${({ theme }) => theme.colors.background };

  ${({ labelSize }) => labelSize === 'big' && css`
    width: 66%;
    margin: 0;
  `};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-size: ${RFValue(9)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
`;




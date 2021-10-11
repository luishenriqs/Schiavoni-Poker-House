import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IsActiveProps {
    type: 'admin' | 'user';
    isActive: boolean;
}

export const Container = styled.View<IsActiveProps>`
    width: 48%;
    margin: 8px 0 12px;
    border-radius: 2px;
    border-style: solid;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.text };
    ${({ isActive, type }) => isActive && type === 'admin' && css`
        border-color: ${({ theme }) => theme.colors.success };
    `};
    ${({ isActive, type }) => isActive && type === 'user' && css`
        border-color: ${({ theme }) => theme.colors.attention };
    `};
`;

export const Button = styled(RectButton)<IsActiveProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: ${({ theme }) => theme.colors.secondary };
    ${({ isActive, type }) => isActive && type === 'admin' && css`
        background: ${({ theme }) => theme.colors.success };
    `};
    ${({ isActive, type }) => isActive && type === 'user' && css`
        background: ${({ theme }) => theme.colors.attention };
    `};
`;

export const Icon = styled(Feather)<IsActiveProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 7px;
    color: ${({ theme }) => theme.colors.text };
    ${({ isActive, type }) => isActive && type === 'admin' && css`
        color: ${({ theme }) => theme.colors.success };
    `};
    ${({ isActive, type }) => isActive && type === 'user' && css`
        color: ${({ theme }) => theme.colors.attention };
    `};
`;

export const Title = styled.Text<IsActiveProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.text };
    ${({ isActive, type }) => isActive && type === 'admin' && css`
        color: ${({ theme }) => theme.colors.success };
    `};
    ${({ isActive, type }) => isActive && type === 'user' && css`
        color: ${({ theme }) => theme.colors.attention };
    `};
`;
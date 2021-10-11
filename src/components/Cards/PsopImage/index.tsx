import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import {
    Container,
 } from './styles';

interface IProps {
    svg: React.FC<SvgProps>
}

export default function PsopImage({
    svg: Svg,
}: IProps) {
    return (
        <Container>
            <Svg 
                width={RFValue(130)}
            />
        </Container>
    );
}

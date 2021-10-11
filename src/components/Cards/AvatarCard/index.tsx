import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import {
    Container,
    Content,
    GameSheet,
    Title,
 } from './styles';

interface IProps {
    svg: React.FC<SvgProps>
    title: string,
}

export default function AvatarCard({
    svg: Svg,
    title,
}: IProps) {
    return (
        <Container>
            <>
                <Content>
                    <Svg 
                        width={RFValue(265)}
                        height={RFValue(265)}
                    />
                    <GameSheet>
                        <Title>{title}</Title>
                    </GameSheet>
                </Content>
            </>
        </Container>
    );
}

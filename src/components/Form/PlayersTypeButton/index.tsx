import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Button, Icon, Title } from './styles';

const icons =  {
    admin: 'arrow-up-circle',
    user: 'arrow-down-circle',
}

interface IProps extends RectButtonProps {
    type: 'admin' | 'user';
    title: String;
    isActive: boolean;
}

export function PlayersTypeButton({type, title, isActive, ...rest}: IProps) {
    return (
        <Container type={type} isActive={isActive}>
            <Button {...rest}>
                <Icon
                    name={icons[type]}
                    type={type}
                    isActive={isActive}
                />
                <Title
                    type={type}
                    isActive={isActive}
                >
                    {title}
                </Title>
            </Button>
        </Container>
    )
}
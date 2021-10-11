import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { Button } from './styles';

interface IProps extends RectButtonProps {
    svg: React.FC<SvgProps>
}

export default function SignInSocialButton({
    svg: Svg,
    ...rest
}: IProps) {
    return (
        <Button {...rest}>
            <Svg 
                width={RFValue(40)}
                height={RFValue(40)}
            />
        </Button>
    );
}
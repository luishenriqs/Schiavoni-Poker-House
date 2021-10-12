import React from 'react';
import {
  Container, 
  HeaderWrapper, 
  HeaderContent,
  Icon, 
  Title, 
  AdditionalText, 
  Empty
} from './styles';

interface HeaderProps {
  title: string;
  text?: string;
  headerSize: 'big' | 'small';
  onPress(): void;
}


const Header: React.FC<HeaderProps> = ({
  title, 
  text, 
  headerSize, 
  onPress
}) => {
  return (
    <Container>
      <HeaderWrapper headerSize={headerSize}>
        <HeaderContent>
          <Empty/>
          <Title>{title}</Title>
          <Icon size={30} name="menu" onPress={onPress} />
        </HeaderContent>

        {text && (
          <AdditionalText>{text}</AdditionalText>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

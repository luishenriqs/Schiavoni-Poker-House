import React from 'react';
import { LabelCard, Label } from './styles';

export interface LabelProps {
  labelSize: 'big' | 'small';
  text: string;
}

const LabelComponent: React.FC<LabelProps> = ({ labelSize, text }) => {
  return (
    <LabelCard labelSize={labelSize} text={text}>
      <Label>{text}</Label>
    </LabelCard>
  );
};

export default LabelComponent;

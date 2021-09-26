import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { ColorfulContainer } from './Card';
import { colors } from './colors';

interface Props {
  children: ReactNode;
  onPress: () => void;
  color?: keyof typeof colors;
}
export const GeneratorButton = ({
  children,
  onPress,
  color,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ColorfulContainer color={color}>{children}</ColorfulContainer>
    </TouchableOpacity>
  );
};

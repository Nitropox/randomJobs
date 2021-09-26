import React from 'react';
import { View, Pressable } from 'react-native';
import styled, { css, CSSProp } from 'styled-components';
import { colors } from './colors';
import { RegularText } from './TextComponents';

interface ChipProps {
  isActive: boolean;
  color: keyof typeof colors;
}

const ChipBody = styled(View)<ChipProps>`
  padding: 15px 20px;
  border-radius: 30px;
  margin: 4px 10px 4px 0;

  ${({ isActive, color }: ChipProps): CSSProp =>
    (isActive &&
      color &&
      css`
        background-color: ${colors[color]};
      `) ||
    css`
      background-color: ${colors.mystic};
    `};
`;

interface Props {
  text: string;
  isActive: boolean;
  onPress: () => void;
  color: keyof typeof colors;
}

export const Chip = ({
  text,
  onPress,
  isActive,
  color,
}: Props): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <ChipBody isActive={isActive} color={color}>
        <RegularText color={isActive ? 'weePeep' : 'black'}>{text}</RegularText>
      </ChipBody>
    </Pressable>
  );
};

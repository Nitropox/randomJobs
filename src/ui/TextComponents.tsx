import styled, { CSSProp } from 'styled-components';
import { Text } from 'react-native';
import { colors } from 'ui/colors';

interface BoldTextProps {
  color?: keyof typeof colors;
  fontSize?: number;
}

export const BoldText = styled(Text)<BoldTextProps>`
  font-family: 'RobotoCondensed-Bold';
  font-size: ${({ fontSize = 32 }: BoldTextProps): CSSProp => `${fontSize}px`};
  color: ${({ color = 'black' }: BoldTextProps): CSSProp => colors[color]};
`;

export const RegularText = styled(Text)<BoldTextProps>`
  font-family: 'Roboto-Regular';
  font-size: ${({ fontSize = 18 }: BoldTextProps): CSSProp => `${fontSize}px`};
  color: ${({ color = 'black' }: BoldTextProps): CSSProp => colors[color]};
`;

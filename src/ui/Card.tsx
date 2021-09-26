import React, { ReactNode } from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { View } from 'react-native';
import device from 'utils/device';
import { colors } from './colors';
import { ITEM_HEIGHT } from 'utils/constants';

interface CardProps {
  color?: keyof typeof colors;
  fixedHeight?: boolean;
}

export const ColorfulContainer = styled(View)<CardProps>`
  width: ${device.width - 40}px;
  border-radius: 16px;
  background-color: ${({ color = 'white' }: CardProps): string =>
    colors[color]};
  padding: 20px;

  ${({ fixedHeight }: CardProps): CSSProp =>
    (fixedHeight &&
      css`
        height: ${ITEM_HEIGHT - 20}px;
      `) ||
    ''};
`;

const OuterWrapper = styled(View)`
  height: ${ITEM_HEIGHT}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
interface Props {
  children: ReactNode;
  color?: keyof typeof colors;
  fixedHeight?: boolean;
}

export const Card = ({ children, color, fixedHeight }: Props): JSX.Element => {
  return (
    <OuterWrapper>
      <ColorfulContainer color={color} fixedHeight={fixedHeight}>
        {children}
      </ColorfulContainer>
    </OuterWrapper>
  );
};

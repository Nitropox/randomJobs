import { View, ViewProps } from 'react-native';
import styled, { css, CSSProp } from 'styled-components';

export const space = {
  XS: '4px',
  S: '8px',
  M: '16px',
  L: '24px',
  LXL: '32px',
  XL: '48px',
  XXL: '64px',
};

export type SpaceSizes = keyof typeof space;

interface SpacerProps extends ViewProps {
  size: SpaceSizes;
}

export const Spacer = styled(View)<SpacerProps>`
  ${({ size }: SpacerProps): CSSProp => css`
    width: ${space[size]};
    height: ${space[size]};
  `}
`;

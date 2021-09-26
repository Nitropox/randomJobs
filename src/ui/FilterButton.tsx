import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';

export const ButtonInnerWrapper = styled(View)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  onPress: () => void;
}
export const FilterButton = ({ onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonInnerWrapper>
        <Svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <Path
            d="M0 15C0 15.5523 0.447715 16 1 16H7C7.55228 16 8 15.5523 8 15V14.3333C8 13.781 7.55228 13.3333 7 13.3333H1C0.447715 13.3333 0 13.781 0 14.3333V15ZM1 0C0.447716 0 0 0.447715 0 1V1.66667C0 2.21895 0.447715 2.66667 1 2.66667H23C23.5523 2.66667 24 2.21895 24 1.66667V1C24 0.447716 23.5523 0 23 0H1ZM0 8.33333C0 8.88562 0.447715 9.33333 1 9.33333H15C15.5523 9.33333 16 8.88562 16 8.33333V7.66667C16 7.11438 15.5523 6.66667 15 6.66667H1C0.447715 6.66667 0 7.11438 0 7.66667V8.33333Z"
            fill="#9F9F9F"
          />
        </Svg>
      </ButtonInnerWrapper>
    </TouchableOpacity>
  );
};

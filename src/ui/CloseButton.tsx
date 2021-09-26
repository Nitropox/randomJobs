import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ButtonInnerWrapper } from './FilterButton';

interface Props {
  onPress: () => void;
}

export const CloseButton = ({ onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonInnerWrapper>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M5 19L12 12M12 12L19 5M12 12L19 19M12 12L5 5"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </ButtonInnerWrapper>
    </TouchableOpacity>
  );
};

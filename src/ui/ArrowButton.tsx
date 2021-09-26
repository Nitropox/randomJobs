import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ButtonInnerWrapper } from './FilterButton';

interface Props {
  onPress: () => void;
}

export const ArrowButton = ({ onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonInnerWrapper>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 5L5.00001 12M5.00001 12L12 19M5.00001 12L19 12"
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

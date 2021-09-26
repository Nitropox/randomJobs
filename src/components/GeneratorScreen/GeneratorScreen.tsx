import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BoldText, RegularText } from 'ui/TextComponents';
import { Spacer } from 'ui/Spacer';
import { GeneratorButton } from 'ui/GeneratorButton';
import { AppContex } from 'components/AppContext/AppContext';
import { useNavigation } from '@react-navigation/core';
import { ScreenProp } from 'src/App';

const ScreenContainer = styled(ScrollView)`
  flex-grow: 1;
  padding: 10px 20px 0;
`;

export const GeneratorScreen = (): JSX.Element => {
  const { generateJobs } = useContext(AppContex);
  const { navigate } = useNavigation<ScreenProp>();

  const onPressHandler = (number: number): void => {
    generateJobs(number);
    navigate('Jobs');
  };

  return (
    <SafeAreaView edges={['top']}>
      <ScreenContainer bounces={false}>
        <BoldText>Generate random jobs</BoldText>
        <Spacer size="XS" />
        <RegularText>This will generate jobs collection</RegularText>
        <Spacer size="XL" />
        <GeneratorButton
          color="japonica"
          onPress={(): void => onPressHandler(10)}>
          <BoldText color="weePeep">10 random jobs</BoldText>
          <RegularText color="weePeep">Just a sip</RegularText>
        </GeneratorButton>
        <Spacer size="L" />
        <GeneratorButton
          color="shadowGreen"
          onPress={(): void => onPressHandler(1000)}>
          <BoldText color="weePeep">1000 random jobs</BoldText>
          <RegularText color="weePeep">Little bit more</RegularText>
        </GeneratorButton>
        <Spacer size="L" />
        <GeneratorButton
          color="anzac"
          onPress={(): void => onPressHandler(10000)}>
          <BoldText color="weePeep">10k random jobs</BoldText>
          <RegularText color="weePeep">Plenty</RegularText>
        </GeneratorButton>
        <Spacer size="L" />
        <GeneratorButton
          color="bismark"
          onPress={(): void => onPressHandler(100000)}>
          <BoldText color="weePeep">100k random jobs</BoldText>
          <RegularText color="weePeep">Bring it on!</RegularText>
        </GeneratorButton>
      </ScreenContainer>
    </SafeAreaView>
  );
};

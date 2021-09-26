import { useNavigation } from '@react-navigation/core';
import { AppContex } from 'components/AppContext/AppContext';
import React, { ReactNode, useContext } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { Chip } from 'ui/Chip';
import { CloseButton } from 'ui/CloseButton';
import { colors } from 'ui/colors';
import { Spacer } from 'ui/Spacer';
import { BoldText, RegularText } from 'ui/TextComponents';
import { reqs } from 'utils/generateRandomJobs';

const Container = styled(ScrollView)`
  padding: 0 20px;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ChipsContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

interface ButtonProps {
  color: keyof typeof colors;
}
const Button = styled(View)<ButtonProps>`
  align-items: center;
  padding: 10px 50px;
  border-radius: 16px;
  background-color: ${({ color = 'grey' }: ButtonProps): string =>
    colors[color]};
  margin: 10px auto;
`;

export const FiltersModal = (): JSX.Element => {
  const navigation = useNavigation();
  const { toggleQualification, qualifications, clearQualifications } =
    useContext(AppContex);

  return (
    <SafeAreaView>
      <Container>
        <Row>
          <BoldText>Filters</BoldText>
          <CloseButton onPress={(): void => navigation.goBack()} />
        </Row>
        <Spacer size="XS" />
        <RegularText>
          Show only the jobs that you can do with following requirements
        </RegularText>
        <Row>
          <TouchableOpacity onPress={clearQualifications}>
            <Button color="grey">
              <BoldText color="white" fontSize={24}>
                Clear
              </BoldText>
            </Button>
          </TouchableOpacity>
          <Spacer size="XS" />
          <TouchableOpacity onPress={(): void => navigation.goBack()}>
            <Button color="anzac">
              <BoldText color="white" fontSize={24}>
                Apply
              </BoldText>
            </Button>
          </TouchableOpacity>
        </Row>
        <ChipsContainer>
          {reqs.sort().map(
            (req): ReactNode => (
              <Chip
                key={req}
                text={req}
                isActive={qualifications.indexOf(req) > -1}
                color="bismark"
                onPress={(): void => toggleQualification(req)}
              />
            ),
          )}
        </ChipsContainer>
      </Container>
    </SafeAreaView>
  );
};

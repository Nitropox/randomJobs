import { useNavigation } from '@react-navigation/core';
import { AppContex } from 'components/AppContext/AppContext';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProp } from 'src/App';
import styled from 'styled-components';
import { ArrowButton } from 'ui/ArrowButton';
import { colors } from 'ui/colors';
import { FilterButton } from 'ui/FilterButton';
import { BoldText } from 'ui/TextComponents';
import { ITEM_HEIGHT } from 'utils/constants';
import { SingleJob } from './SingleJob';

interface ItemLayout {
  length: number;
  offset: number;
  index: number;
}

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const Header = styled(View)`
  justify-content: center;
  align-items: center;
  height: 64px;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.mystic};
  background-color: white;
`;

const SubHeader = styled(View)`
  flex-direction: row;
  height: 40px;
  background-color: white;
  align-items: center;
  padding: 0 20px;
`;

const ArrowButtonWrapper = styled(View)`
  position: absolute;
  left: 20px;
`;
const ListContainer = styled(View)`
  flex: 1;
  background-color: ${colors.mystic};
`;

const Results = styled(View)`
  padding: 3px 15px;
  background-color: ${colors.bismark};
  border-radius: 18px;
  margin-left: 20px;
`;

const FilterButtonContainer = styled(View)`
  margin-left: auto;
`;

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export const JobsListScreenCompoennt = (): JSX.Element => {
  const { jobs, qualifications, filteredJobs } = useContext(AppContex);
  const { navigate } = useNavigation<ScreenProp>();

  return (
    <ScreenContainer>
      <Header>
        <ArrowButtonWrapper>
          <ArrowButton onPress={(): void => navigate('Generator')} />
        </ArrowButtonWrapper>
        <BoldText>Marketplace</BoldText>
      </Header>
      <SubHeader>
        <BoldText fontSize={16} color="grey">
          Results:
        </BoldText>
        <Results>
          <BoldText fontSize={16} color="white">
            {!qualifications.length ? jobs?.length : filteredJobs.length}
          </BoldText>
        </Results>
        <FilterButtonContainer>
          <FilterButton onPress={(): void => navigate('Filters')} />
        </FilterButtonContainer>
      </SubHeader>
      <ListContainer>
        <FlatList
          style={styles.list}
          data={!qualifications.length ? jobs : filteredJobs}
          keyExtractor={(item): string => item.id}
          renderItem={SingleJob}
          getItemLayout={(_, index): ItemLayout => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
      </ListContainer>
    </ScreenContainer>
  );
};

export const JobsListScreen = React.memo(JobsListScreenCompoennt);

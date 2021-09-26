import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Card } from 'ui/Card';
import { Spacer } from 'ui/Spacer';
import { BoldText, RegularText } from 'ui/TextComponents';
import { colorMap } from 'utils/colorMap';

const Row = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SingleJob = ({
  item,
  index,
}: {
  item: Job;
  index: number;
}): JSX.Element => (
  <Card fixedHeight color={colorMap(index)}>
    <BoldText fontSize={24} color="weePeep">{`Company ${item.id}`}</BoldText>
    <Spacer size="S" />
    {!item.requirements.length ? (
      <BoldText fontSize={16} color="weePeep">
        No any requirements for the job
      </BoldText>
    ) : (
      <BoldText fontSize={16} color="weePeep">
        Qualifications for the job:
      </BoldText>
    )}
    <Row>
      {item.requirements.map(
        (el, idx): ReactNode => (
          <Row key={el}>
            <Row>
              {el.split(',').map(
                (entry, i): ReactNode => (
                  <Row key={entry}>
                    <RegularText fontSize={14} color="weePeep">
                      {entry}
                    </RegularText>
                    {el.split(',').length - 1 > i && (
                      <>
                        <Spacer size="XS" />
                        <BoldText fontSize={14} color="weePeep">
                          and
                        </BoldText>
                        <Spacer size="XS" />
                      </>
                    )}
                  </Row>
                ),
              )}
            </Row>
            {item.requirements.length - 1 > idx && (
              <Row>
                <Spacer size="XS" />
                <BoldText fontSize={14} color="weePeep">
                  or
                </BoldText>
                <Spacer size="XS" />
              </Row>
            )}
          </Row>
        ),
      )}
    </Row>
  </Card>
);

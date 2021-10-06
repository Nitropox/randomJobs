import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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

interface Props {
  item: Job;
  index: number;
}
export const SingleJobComponent = ({ item, index }: Props): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Card fixedHeight color={colorMap(index)}>
      <BoldText fontSize={24} color="weePeep">{`Company ${item.id}`}</BoldText>
      <Spacer size="S" />
      {!item.requirements.length ? (
        <BoldText fontSize={16} color="weePeep">
          No any requirements for the job. You are ready for work!
        </BoldText>
      ) : (
        <BoldText fontSize={16} color="weePeep">
          Qualifications for the job:
        </BoldText>
      )}
      <Row>
        {item.requirements.map(
          (el, idx): ReactNode => (
            <Row key={idx}>
              <Row>
                {el.map(
                  (entry, i): ReactNode => (
                    <Row key={entry}>
                      <RegularText fontSize={14} color="weePeep">
                        {t(entry)}
                      </RegularText>
                      {el.length - 1 > i && (
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
};

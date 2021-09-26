import React from 'react';
import { SingleJobComponent } from './SingleJobComponent';

export const SingleJob = ({
  item,
  index,
}: {
  item: Job;
  index: number;
}): JSX.Element => <SingleJobComponent item={item} index={index} />;

import { colors } from 'ui/colors';

export const colorMap = (index: number): keyof typeof colors => {
  if (index === 0 || index % 4 === 0) {
    return 'japonica';
  }
  if (index === 1 || index % 4 === 1) {
    return 'shadowGreen';
  }
  if (index === 2 || index % 4 === 2) {
    return 'anzac';
  }
  return 'bismark';
};

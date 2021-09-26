import { reqs, vehicles } from './constants';

const getRandomInt = (min: number, max: number): number => {
  const minNum = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minNum + 1)) + minNum;
};

/**
 * Draw n uniq elements from array of strings
 */
const drawElementsFromArray = (n: number, arr: string[]): string[] => {
  const reqsCopy = arr.slice();
  return Array.from(Array(n), (): string => {
    const index = getRandomInt(0, reqsCopy.length - 1);
    return reqsCopy.splice(index, 1)[0];
  });
};

/**
 * Draw array of strings with random length [1 to 3]
 */
const drawRandomStrings = (reqArray: string[]): string[] => {
  const arr = reqArray.slice();
  const conjunctionsNumber = getRandomInt(0, 100);

  if (conjunctionsNumber > 90) {
    const draw = drawElementsFromArray(1, arr)[0];
    if (vehicles.includes(draw)) {
      return [
        draw,
        'REQ009', // driver's license
        drawElementsFromArray(
          1,
          arr.filter((el): boolean => el !== draw),
        )[0],
      ];
    }
    return drawElementsFromArray(3, arr);
  }

  if (conjunctionsNumber > 20) {
    const draw = drawElementsFromArray(1, arr)[0];
    if (vehicles.includes(draw)) {
      return [draw, 'REQ009'];
    }
    return drawElementsFromArray(2, arr);
  }

  if (conjunctionsNumber >= 0) {
    return drawElementsFromArray(1, arr);
  }

  return [];
};
/**
 * Generates array of strings with random requirements
 * each element is sorted alphabeticlly and joined
 */
const getRandomRequirements = (): string[] => {
  const disjunctionsNumber = getRandomInt(0, 100);
  if (disjunctionsNumber > 99) {
    return []; // no skills required
  }

  if (disjunctionsNumber > 90) {
    // 2 discjunctions
    const firstDraw = drawRandomStrings(reqs);
    const secondDraw = drawRandomStrings(
      reqs.filter((el): boolean => !firstDraw.includes(el)),
    );
    const table = [...firstDraw, ...secondDraw];
    const thirdDraw = drawRandomStrings(
      reqs.filter((el): boolean => !table.includes(el)),
    );
    return [
      firstDraw.sort().join(),
      secondDraw.sort().join(),
      thirdDraw.sort().join(),
    ];
  }

  if (disjunctionsNumber > 50) {
    // 1 disjunctions
    const firstDraw = drawRandomStrings(reqs);
    const secondDraw = drawRandomStrings(
      reqs.filter((el): boolean => !firstDraw.includes(el)),
    );
    return [firstDraw.sort().join(), secondDraw.sort().join()];
  }

  if (disjunctionsNumber > 0) {
    // no disjunctions
    return [drawRandomStrings(reqs).sort().join()];
  } else {
    return [];
  }
};

export const createRandomJobs = (length: number): Job[] =>
  Array.from(
    Array(length),
    (): Job => ({
      id: (Math.random() + 1).toString(16).substring(2),
      requirements: getRandomRequirements(),
    }),
  );

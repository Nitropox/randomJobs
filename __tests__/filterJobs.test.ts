import { filterJobs } from 'utils/filterJobs';

const emptyJobs: Job[] = [];
const emptyQualifications: string[] = [];

it('returns empty array if params are also empty', (): void => {
  expect(filterJobs(emptyJobs, emptyQualifications)).toHaveLength(0);
});

const jobsMock: Job[] = [
  {
    id: '01',
    requirements: [['REQ001']],
  },
  {
    id: '02',
    requirements: [['REQ002', 'REQ003']],
  },
  {
    id: '03',
    requirements: [['REQ002', 'REQ003'], ['REQ004']],
  },
];

it('returns correct results in given conditions', (): void => {
  expect(filterJobs(jobsMock, ['CAR'])).toHaveLength(0);
  expect(filterJobs(jobsMock, ['REQ001'])).toHaveLength(1);
  expect(filterJobs(jobsMock, ['REQ002', 'REQ003'])).toHaveLength(2);
  expect(filterJobs(jobsMock, ['REQ004'])).toHaveLength(1);
});

const driverJobs: Job[] = [
  {
    id: '01',
    requirements: [['CAR']],
  },
  {
    id: '02',
    requirements: [['CAR_5DOOR']],
  },
  {
    id: '03',
    requirements: [['CAR', 'REQ009']],
  },
];

it('returns correct results comparing similar strings', (): void => {
  expect(filterJobs(driverJobs, ['CAR'])).toHaveLength(1);
  expect(filterJobs(driverJobs, ['CAR_5DOOR'])).toHaveLength(2);
  expect(filterJobs(driverJobs, ['CAR', 'REQ009'])).toHaveLength(2);
  expect(filterJobs(driverJobs, ['CAR_5DOOR', 'REQ009'])).toHaveLength(3);
});

const subcatJobs: Job[] = [
  {
    id: '01',
    requirements: [['PET_DOG']],
  },
  {
    id: '02',
    requirements: [['PET_CAT', 'PET_DOG']],
  },
  {
    id: '03',
    requirements: [['PET_CAT'], ['CAR_5DOOR']],
  },
];

it('returns correct results with subcategories', (): void => {
  expect(filterJobs(subcatJobs, ['PET'])).toHaveLength(0);
  expect(filterJobs(subcatJobs, ['PET_DOG'])).toHaveLength(1);
  expect(filterJobs(subcatJobs, ['PET_CAT'])).toHaveLength(1);
  expect(filterJobs(subcatJobs, ['PET_DOG', 'PET_CAT'])).toHaveLength(3);
});

const randomJobs: Job[] = [
  {
    id: '01',
    requirements: [['CAR']],
  },
  {
    id: '02',
    requirements: [['CAR', 'VEHICLE001']],
  },
];

it('returns correct results for user who has many skills', (): void => {
  expect(filterJobs(randomJobs, ['CAR', 'REQ1', 'VEHICLE001'])).toHaveLength(2);
});

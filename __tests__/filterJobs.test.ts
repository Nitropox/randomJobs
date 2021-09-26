import { filterJobs } from 'utils/filterJobs';

const emptyJobs: Job[] = [];
const emptyQualifications: string[] = [];

it('returns empty array if params are also empty', (): void => {
  expect(filterJobs(emptyJobs, emptyQualifications)).toHaveLength(0);
});

const jobsMock: Job[] = [
  {
    id: '01',
    requirements: ['flat'],
  },
  {
    id: '02',
    requirements: ['flat,ssn'],
  },
  {
    id: '03',
    requirements: ['flat,car', 'bicycle'],
  },
];

it('returns correct results in given conditions', (): void => {
  expect(filterJobs(jobsMock, ['car'])).toHaveLength(0);
  expect(filterJobs(jobsMock, ['flat'])).toHaveLength(1);
  expect(filterJobs(jobsMock, ['flat', 'ssn'])).toHaveLength(2);
  expect(filterJobs(jobsMock, ['bicycle'])).toHaveLength(1);
});

const driverJobs: Job[] = [
  {
    id: '01',
    requirements: ['car'],
  },
  {
    id: '02',
    requirements: ['car 5 door'],
  },
  {
    id: '03',
    requirements: ["car,driver's license"],
  },
];

it('returns correct results comparing similar strings', (): void => {
  expect(filterJobs(driverJobs, ['car'])).toHaveLength(1);
  expect(filterJobs(driverJobs, ['car 5 door'])).toHaveLength(2);
  expect(filterJobs(driverJobs, ['car', "driver's license"])).toHaveLength(2);
  expect(
    filterJobs(driverJobs, ['car 5 door', "driver's license"]),
  ).toHaveLength(3);
});

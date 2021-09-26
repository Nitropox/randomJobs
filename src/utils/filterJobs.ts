/**
 * The idea is: @param jobs requirements are kept as strings array in DNF form
 * that means conjuctions are joined with coma and disjunctions are new array elements
 * eg: ['car,flat','boat'] means car and flat or boat.
 * @param qualifications array is just regular array of strings with single entries eg: ['flat', 'car']
 * means that a person has a flat and a car
 * @param subCategories is optional array for special cases, eg: 'car','car 2 door', 'car 3 door'
 * these all are car
 */

export const filterJobs = (jobs: Job[], qualifiactions: string[]): Job[] => {
  if (!qualifiactions.length) {
    return [];
  }
  const skills = qualifiactions.sort().join();
  return jobs.filter((job): boolean => {
    if (!job.requirements.length) {
      return true;
    }
    // asumming jobs are already sorted and joined
    return job.requirements.some((req): boolean => skills.includes(req));
  });
};

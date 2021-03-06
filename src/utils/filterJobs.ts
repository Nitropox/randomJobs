/**
 * The idea is: @param jobs requirements are kept as 2 dimensional array of string in DNF form
 * that means conjuctions are stored in a single row and disjunctions are stroed as column
 * eg: [['car', 'flat],['boat']] means car AND flat OR boat. Conjunction has higher priority.
 * Additionaly, some entries have subcategories identified with underscore _
 * thx to this CAR_5DOOR is also qualified for jobs that need CAR and some other requirements.
 * @param qualifications array is just regular array of strings with single entries eg: ['flat', 'car']
 * means that a user has a flat and a car
 */
export const filterJobs = (jobs: Job[], qualifiactions: string[]): Job[] => {
  if (!qualifiactions.length) {
    return [];
  }
  const strippedQuali = qualifiactions.map((q): string =>
    q.includes('_') ? q.split('_')[0] : q,
  );
 
  return jobs.filter((job): boolean => {
    if (!job.requirements.length) {
      return true;
    }
    return job.requirements.some((req): boolean =>
      req.every(
        (r): boolean => qualifiactions.includes(r) || strippedQuali.includes(r),
      ),
    );
  });
};


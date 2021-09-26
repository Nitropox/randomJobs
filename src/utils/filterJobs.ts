export const filterJobs = (jobs: Job[], qualifiactions: string[]): Job[] => {
  if (!qualifiactions.length) {
    return [];
  }
  const quali = qualifiactions.sort().join();
  const strippedQuali = qualifiactions
    .map((q): string => (q.includes('_') ? q.split('_')[0] : q))
    .sort()
    .join();
  return jobs.filter((job): boolean => {
    if (!job.requirements.length) {
      return true;
    }
    return job.requirements.some(
      (req): boolean => quali.includes(req) || strippedQuali.includes(req),
    );
  });
};

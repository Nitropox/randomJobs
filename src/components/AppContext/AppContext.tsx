import React, { ReactNode, useCallback, useState, useEffect } from 'react';
import { filterJobs } from 'utils/filterJobs';
import { createRandomJobs } from 'utils/generateRandomJobs';

interface AppContex {
  jobs?: Job[];
  filteredJobs: Job[];
  generateJobs: (number: number) => void;
  qualifications: string[];
  toggleQualification: (quali: string) => void;
  clearQualifications: () => void;
}

export const AppContex = React.createContext<AppContex>({
  jobs: undefined,
  filteredJobs: [],
  generateJobs: (): void => {},
  qualifications: [],
  toggleQualification: (): void => {},
  clearQualifications: (): void => {},
});

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props): JSX.Element => {
  const [jobs, setJobs] = useState<Job[]>();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [qualifications, setQualifications] = useState<string[]>([]);

  const generateJobs = (number: number): void => {
    setQualifications([]);
    setFilteredJobs([]);
    setJobs(createRandomJobs(number));
  };

  const toggleQualification = useCallback((quali: string): void => {
    setQualifications((prevState: string[]): string[] => {
      const valueIndex = prevState.findIndex(
        (el: string): boolean => el === quali,
      );
      if (valueIndex > -1) {
        return prevState.filter((el: string): boolean => el !== quali);
      }
      return [...prevState, quali];
    });
  }, []);

  const clearQualifications = (): void => setQualifications([]);

  useEffect((): void => {
    setFilteredJobs(jobs ? filterJobs(jobs, qualifications) : []);
  }, [jobs, qualifications]);

  const value = {
    jobs,
    generateJobs,
    qualifications,
    toggleQualification,
    clearQualifications,
    filteredJobs,
  };

  return <AppContex.Provider value={value}>{children}</AppContex.Provider>;
};

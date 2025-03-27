import { createContext, useContext } from 'react';

const DataContext = createContext({} as DataContextType);

interface DataContextType {
  links: any[];
  projects: any[];
  tasks: any[];
  loading: boolean;
}

export const DataProvider = ({
  children,
  links,
  projects,
  tasks,
  loading,
}: {
  children: React.ReactNode;
  links: any[];
  projects: any[];
  tasks: any[];
  loading: boolean;
}) => {
  return (
    <DataContext.Provider value={{ links, projects, tasks, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

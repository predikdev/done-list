import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface Link {
  id: number;
  name: string;
  slug: string;
  icon: string;
  tasks?: number | null;
}

interface Project {
  id: number;
  name: string;
  slug: string;
}

interface LinksContextType {
  links: Link[];
  projects: Project[];
  loading: boolean;
  error: Error | null;
}

const LinksContext = createContext<LinksContextType>({
  links: [],
  projects: [],
  loading: true,
  error: null,
});

export function LinksProvider({ children }: { children: ReactNode }) {
  const [links, setLinks] = useState<Link[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [linksRes, projectsRes] = await Promise.all([
          fetch('http://localhost:3000/links'),
          fetch('http://localhost:3000/projects'),
        ]);

        if (!linksRes.ok || !projectsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [linksData, projectsData] = await Promise.all([
          linksRes.json(),
          projectsRes.json(),
        ]);

        setLinks(linksData);
        setProjects(projectsData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = {
    links,
    projects,
    loading,
    error,
  };

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
}

export function useLinks() {
  const context = useContext(LinksContext);

  if (!context) {
    throw new Error('useLinks must be used within a LinksProvider');
  }

  return context;
}

import { DataProvider } from '@/store/DataContext';
import Sidebar from '@/components/sidebar/Sidebar';
import { Dashboard } from '@/components/Dashboard/Dashboard';

export default function App({
  links,
  projects,
  loading = false,
}: {
  links: any[];
  projects: any[];
  loading: boolean;
}) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DataProvider
      links={links}
      projects={projects}
      tasks={[]}
      loading={loading}
    >
      <div className='text-primary flex w-full'>
        <Sidebar />
        <main className='w-full flex justify-center p-4'>
          <Dashboard />
        </main>
      </div>
    </DataProvider>
  );
}

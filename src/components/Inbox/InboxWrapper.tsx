import { DataProvider } from '../../store/DataContext';
import Sidebar from '../sidebar/Sidebar';

import { Inbox } from '@/components/Inbox/Inbox';

export default function App({ tasks }: { tasks: any[] }) {
  return (
    <DataProvider tasks={tasks} links={[]} projects={[]} loading={false}>
      <div className='text-primary flex w-full'>
        <Sidebar />
        <main className='w-full flex justify-center p-4'>
          <Inbox />
        </main>
      </div>
    </DataProvider>
  );
}

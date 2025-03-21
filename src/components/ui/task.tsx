import { ChevronRight } from 'lucide-react';
import { useState, type ReactNode } from 'react';

export function Task({ children }: { children: ReactNode }) {
  const [selectedTask, setSelectedTask] = useState();
  return (
    <div className='group not-first:border-t-1 py-2 flex'>
      <div className='flex items-center px-4'>
        <input type='checkbox' className={`h-4 w-4 rounded border-gray-300`} />
      </div>
      <li className={`w-full flex items-center`}>{children}</li>
      <div className='flex items-center px-4'>
        <ChevronRight className='ml-auto h-5 w-5' />
      </div>
    </div>
  );
}

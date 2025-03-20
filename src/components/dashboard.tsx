'use client';
import { CheckCircle2, Clock, ListTodo, PieChart } from 'lucide-react';

export function Dashboard() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {/* Stat Card 1 */}
      <div className='rounded-lg border bg-white p-6 shadow-sm'>
        <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <h3 className='text-sm font-medium'>Total Tasks</h3>
          <ListTodo className='h-4 w-4 text-gray-500' />
        </div>
        <div>
          <div className='text-2xl font-bold'>27</div>
          <p className='text-xs text-gray-500'>+5 from last week</p>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className='rounded-lg border bg-white p-6 shadow-sm'>
        <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <h3 className='text-sm font-medium'>Completed</h3>
          <CheckCircle2 className='h-4 w-4 text-gray-500' />
        </div>
        <div>
          <div className='text-2xl font-bold'>15</div>
          <p className='text-xs text-gray-500'>55% completion rate</p>
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className='rounded-lg border bg-white p-6 shadow-sm'>
        <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <h3 className='text-sm font-medium'>Due Today</h3>
          <Clock className='h-4 w-4 text-gray-500' />
        </div>
        <div>
          <div className='text-2xl font-bold'>5</div>
          <p className='text-xs text-gray-500'>2 high priority</p>
        </div>
      </div>

      {/* Stat Card 4 */}
      <div className='rounded-lg border bg-white p-6 shadow-sm'>
        <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <h3 className='text-sm font-medium'>Projects</h3>
          <PieChart className='h-4 w-4 text-gray-500' />
        </div>
        <div>
          <div className='text-2xl font-bold'>4</div>
          <p className='text-xs text-gray-500'>Most tasks in Work</p>
        </div>
      </div>
    </div>
  );
}

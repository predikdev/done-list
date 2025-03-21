import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface Task {
  id: number;
  title: string;
  processed: boolean;
}

export function AddTask({ onAddTask }: { onAddTask: (task: Task) => void }) {
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = { id: Date.now(), title: newTask, processed: false };
    onAddTask(task);
    setNewTask('');
  };

  return (
    <>
      <form className='w-full'>
        <div className='flex items-center justify-between gap-2'>
          <Input
            placeholder='Add new task'
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTask();
              }
            }}
          />

          <div className='add-button'>
            <Button type='button' variant={'add'} onClick={addTask}>
              <Plus size={24} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

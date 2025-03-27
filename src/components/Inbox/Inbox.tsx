import { useEffect, useState } from 'react';
import { AddTask } from '@/components/Inbox/AddTask';
import { TaskList } from '@/components/Inbox/TaskList';
import { useData } from '@/store/DataContext';

interface Task {
  id: number;
  title: string;
  processed: boolean;
}

export function Inbox() {
  // Data from context
  const { tasks: allTasks } = useData();
  // Set new state for tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Set all tasks from db to the state
  useEffect(() => {
    const initialTaks = () => {
      setTasks((prevTasks) => [...prevTasks, ...allTasks]);
    };

    initialTaks();
  }, []);

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className='h-full w-full xl:w-3xl p-4 flex flex-col items-center'>
      <div className='w-full py-4'>
        <h1>Inbox</h1>
        <p className='text-gray-500'>
          Process and organize your incoming tasks
        </p>
      </div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

import { useState } from 'react';
import { AddTask } from './addTask';
import { TaskList } from './taskList';

interface Task {
  id: number;
  title: string;
  processed: boolean;
}

export function InboxContent() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Review new feature requests', processed: false },
    { id: 2, title: 'Respond to client emails', processed: false },
    { id: 3, title: 'Schedule team meeting', processed: false },
    { id: 4, title: 'Update portfolio website', processed: false },
  ]);

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

import { Task } from '../ui/task';

type TaskArray = {
  id: number;
  title: string;
  processed: boolean;
};

export function TaskList({ tasks }: { tasks: TaskArray[] }) {
  return (
    <div className='w-full py-4'>
      <ul className='flex flex-col gap-2 border-1 rounded-md py-2'>
        {tasks.map((task) => (
          <Task key={task.id}>{task.title}</Task>
        ))}
      </ul>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';

import { TrendingUpIcon } from 'lucide-react';

type ProjectProps = {
  projectName: string;
  numberOfTasks: number;
  progress: string;
  lastActivity: number;
};
function Project({
  projectName,
  numberOfTasks,
  progress,
  lastActivity,
}: ProjectProps) {
  return (
    <Card className='@container/card'>
      <CardHeader className='relative'>
        {/* <CardDescription>Total Revenue</CardDescription>  */}
        <CardTitle className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
          Portfolio
        </CardTitle>
      </CardHeader>
      <CardFooter className='flex-col items-start gap-1 text-sm'>
        <div className='line-clamp-1 flex gap-2 font-medium'></div>
        <div className='text-muted-foreground'>
          Visitors for the last 6 months
        </div>
      </CardFooter>
      <div className='badges | px-6'>
        <Badge variant='outline' className='flex gap-1 rounded-lg text-xs'>
          <TrendingUpIcon className='size-3' />
          React
        </Badge>
      </div>
    </Card>
  );
}

export { Project };

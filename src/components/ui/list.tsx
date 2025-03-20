import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

type ListProps = React.LiHTMLAttributes<HTMLLIElement> & {
  variant?: 'link' | 'outline';
};

export default function List({
  className,
  variant,
  children,
  ...props
}: ListProps) {
  return (
    <li className={cn(listVariants({ variant }), className)} {...props}>
      {children}
    </li>
  );
}

const listVariants = cva('rounded-md', {
  variants: {
    variant: {
      default:
        'relative flex items-center p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer',
      link: 'text-red-500 ',
      outline: 'text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'link' | 'outline';
};

export default function Divider({
  className,
  variant,
  children,
  ...props
}: DividerProps) {
  return (
    <div className={cn(dividerVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

const dividerVariants = cva('rounded-md', {
  variants: {
    variant: {
      default: 'border-t-2 border-gray-300 my-4',
      link: 'text-red-500 ',
      outline: 'text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

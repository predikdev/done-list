import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
// import type { AnchorHTMLAttributes } from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'link' | 'outline';
};

export default function Link({ className, variant, ...props }: LinkProps) {
  return <a className={cn(linkVariants({ variant }), className)} {...props} />;
}

const linkVariants = cva('rounded-md', {
  variants: {
    variant: {
      default: 'w-full',
      link: 'text-red-500 ',
      outline: 'text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

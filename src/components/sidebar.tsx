import { Inbox, CalendarDays, House, SquareCheckBig, Sun } from 'lucide-react';
import Link from './ui/link';
import List from './ui/list';

// Sample projects list
const projects = [
  { id: 1, name: 'Personal', slug: 'personal', href: '/' },
  { id: 2, name: 'Work', slug: 'work', href: '/' },
  { id: 3, name: 'Shopping', slug: 'shopping', href: '/' },
  { id: 4, name: 'Health', slug: 'health', href: '/' },
];

const links = [
  { id: 1, name: 'Dashboard', slug: 'dashboard', icon: House },
  { id: 2, name: 'Inbox', slug: 'inbox', icon: Inbox, tasks: 12 },
  { id: 3, name: 'Today', slug: 'today', icon: Sun, tasks: 3 },
  { id: 4, name: 'Upcoming', slug: 'upcoming', icon: CalendarDays, tasks: 9 },
];

export function Sidebar() {
  return (
    <aside className='flex h-screen w-64 overflow-hidden relative border-r-1 '>
      <div className='sidebar w-full'>
        <div className='top | p-4 flex items-center justify-between'>
          <div className='logo | flex items-center justify-center gap-2'>
            <SquareCheckBig size={24} strokeWidth={'2px'} />
            <p className='text-xl font-semibold'>DoneList</p>
          </div>
        </div>
        <div className='divider absolute border-b-1 w-64'></div>
        <div className='main-section | p-4 flex flex-col justify-center'>
          <ul>
            {links.map((link) => (
              <List key={link.id}>
                <Link href={'/' + link.slug}>
                  <div className='content | flex items-center justify-between w-full gap-x-2'>
                    <div className='flex items-center gap-x-2'>
                      <link.icon size={16} />
                      <p className='font-normal'>{link.name}</p>
                    </div>
                    {link.tasks ? (
                      <p className='rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground'>
                        {link.tasks}
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </Link>
              </List>
            ))}
          </ul>
        </div>
        <div className='projects | flex flex-col justify-center p-4'>
          <p className='text-xs text-primary/60 font-semibold'>Projects</p>
          <ul>
            {projects.map((project) => (
              <List key={project.id}>
                <Link href={'/' + project.slug}>
                  <div className='content | flex items-center gap-x-2 '>
                    <span className='h-2 w-2 rounded-full bg-primary'></span>
                    <p>{project.name}</p>
                  </div>
                </Link>
              </List>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

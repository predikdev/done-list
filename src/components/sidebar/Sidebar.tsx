import { useData } from '@/store/DataContext';
import { SidebarSkeleton } from './SidebarSkeleton';
import { Inbox, CalendarDays, House, SquareCheckBig, Sun } from 'lucide-react';
import Link from '../ui/link';
import List from '../ui/list';

type Link = {
  id: string;
  icon: string;
  slug: string;
  name: string;
  tasks?: number;
};

type Project = {
  id: string;
  name: string;
  slug: string;
};

const menuList = [
  {
    id: '1',
    name: 'Dashboard',
    icon: 'House',
    slug: 'dashboard',
  },
  {
    id: '2',
    name: 'Inbox',
    icon: 'Inbox',
    slug: 'inbox',
  },
  {
    id: '3',
    name: 'Today',
    icon: 'CalendarDays',
    slug: 'today',
  },
  {
    id: '4',
    name: 'Upcoming',
    icon: 'CalendarDays',
    slug: 'upcoming',
  },
];

const LINK_ORDER = {
  dashboard: 0,
  inbox: 1,
  today: 2,
  upcoming: 3,
};

export default function Sidebar() {
  const { links, projects, loading } = useData();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'House':
        return House;
      case 'Inbox':
        return Inbox;
      case 'Sun':
        return Sun;
      case 'CalendarDays':
        return CalendarDays;
      default:
        return House;
    }
  };

  if (loading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside className='flex h-screen min-w-64 overflow-hidden relative border-r-1 '>
      <div className='sidebar w-full'>
        <div className='top | p-4 flex items-center justify-between'>
          <div className='logo | flex items-center justify-center gap-2'>
            <SquareCheckBig size={24} strokeWidth={'2px'} />
            <p className='text-xl font-semibold'>DoneList</p>
          </div>
        </div>
        <div className='divider absolute border-b-1 w-64'></div>
        <div className='main-section | p-4 flex flex-col justify-center min-h-[175px]'>
          <ul>
            {menuList.map((link: Link) => {
              const Icon = getIcon(link.icon);
              return (
                <List key={link.id}>
                  <Link href={'/' + link.slug}>
                    <div className='content | flex items-center justify-between w-full gap-x-2'>
                      <div className='flex items-center gap-x-2'>
                        <Icon size={16} />
                        <p className='font-normal'>{link.name}</p>
                      </div>
                      {link.tasks !== null ||
                        (link.tasks !== undefined && (
                          <p className='rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground'>
                            {link.tasks}
                          </p>
                        ))}
                    </div>
                  </Link>
                </List>
              );
            })}
          </ul>
        </div>
        <div className='projects | flex flex-col justify-center p-4'>
          <p className='text-xs text-primary/60 font-semibold'>Projects</p>
          <ul>
            {projects?.map((project: Project) => (
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

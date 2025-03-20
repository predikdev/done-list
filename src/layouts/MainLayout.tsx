import '../styles/global.css';
import { Sidebar } from '@/components/sidebar';

export function MainLayout() {
  return (
    <div className='app-provider text-primary '>
      <Sidebar />
    </div>
  );
}

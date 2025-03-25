'use client';

import { LinksProvider } from '@/store/DataContext';
import { Sidebar } from './Sidebar';

export default function SidebarProvider() {
  return (
    <LinksProvider>
      <Sidebar />
    </LinksProvider>
  );
}

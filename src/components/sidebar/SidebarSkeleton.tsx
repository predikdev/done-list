export function SidebarSkeleton() {
  return (
    <aside className='h-screen w-64 overflow-hidden relative border-r-1'>
      <div className='links w-full'>
        <div className='top | mx-4 my-2 h-10 bg-gray-200 rounded'></div>
        <div className='divider absolute border-b-1 w-64'></div>
        <div className='p-4 space-y-2'>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className='h-8 bg-gray-200 rounded'></div>
          ))}
        </div>
      </div>
      <div className='projects | flex flex-col justify-center p-4'>
        <div className='h-6 bg-gray-200 rounded'></div>
      </div>
      <div className='p-4 space-y-2'>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className='h-8 bg-gray-200 rounded'></div>
        ))}
      </div>
    </aside>
  );
}

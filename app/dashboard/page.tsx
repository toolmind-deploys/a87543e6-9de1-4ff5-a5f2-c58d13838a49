import { Suspense } from 'react';

async function DashboardContent() {
  const res = await fetch('http://localhost:3000/api/dashboard', { cache: 'no-store' });
  const data = await res.json();
  
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {data.items?.map((item: any) => (
        <div
          key={item.id}
          className='p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow'
        >
          <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
          <p className='text-gray-600'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-8'>Dashboard</h1>
      <Suspense fallback={<div>Loading dashboard items...</div>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
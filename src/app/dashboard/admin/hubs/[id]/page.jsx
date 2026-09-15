import HubDetails from '@/app/components/dashboard/admin/HubDetails';
import React from 'react';

const HubDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/hubs/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch hub');
  }

  const hub = await res.json();

  return (
    <div>
      <HubDetails hub={hub} />
    </div>
  );
};

export default HubDetailsPage;
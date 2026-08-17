import RiderDashboard from '@/app/components/dashboard/rider/RiderDashboard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const RiderDashboardPage = async () => {
    const session = await auth.api.getSession({
       headers: await headers(),
     });
     const user = session?.user
    return (
        <div>
            <RiderDashboard user={user}/>
        </div>
    );
};

export default RiderDashboardPage;
import Pickups from '@/app/components/dashboard/rider/Pickup';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const RiderPickupPage = async () => {
    const session = await auth.api.getSession({
           headers: await headers(),
         });
         const user = session?.user
    return (
        <div>
            <Pickups user={user}/>
        </div>
    );
};

export default RiderPickupPage;
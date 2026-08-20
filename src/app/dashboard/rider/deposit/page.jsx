import Deposit from '@/app/components/dashboard/rider/Deposit';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const RiderDepositPage = async () => {
    const session = await auth.api.getSession({
               headers: await headers(),
             });
             const user = session?.user
    return (
        <div>
            <Deposit user ={user}/>
        </div>
    );
};

export default RiderDepositPage;
import MerchantDashboard from '@/app/components/dashboard/merchant/MerchantDashboard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MerchantDashboardPage = async () => {
    const session = await auth.api.getSession({
               headers: await headers(),
             });
             const merchant = session?.user
    return (
        <div>
            <MerchantDashboard merchant = {merchant}/>
        </div>
    );
};

export default MerchantDashboardPage;
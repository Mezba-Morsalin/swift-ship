import MerchantDashboard from '@/app/components/dashboard/merchant/MerchantDashboard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MerchantDashboardPage = async () => {
    const session = await auth.api.getSession({
               headers: await headers(),
             });
             const merchant = session?.user
            
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shipments`)
          const data = await res.json()
          const shipments = data.data
    return (
        <div>
            <MerchantDashboard merchant = {merchant} shipments= {shipments}/>
        </div>
    );
};

export default MerchantDashboardPage;
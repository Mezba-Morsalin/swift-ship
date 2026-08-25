import StoreSettings from '@/app/components/dashboard/merchant/Store-Settings';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MerchantStoreSettingPage =async () => {
    const session = await auth.api.getSession({
                       headers: await headers(),
                     });
                     const merchant = session?.user
    return (
        <div>
            <StoreSettings merchant = {merchant}/>
        </div>
    );
};

export default MerchantStoreSettingPage;
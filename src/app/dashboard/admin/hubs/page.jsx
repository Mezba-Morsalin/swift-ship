import HubCard from '@/app/components/dashboard/admin/HubCard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {
    const session = await auth.api.getSession({
                       headers: await headers(),
                     });
                     const admin = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hubs`)
    const hubs = await res.json()
    console.log("hubs", hubs)
    return (
        <div>
            <HubCard hubs = {hubs} admin={admin}/>
        </div>
    );
};

export default page;
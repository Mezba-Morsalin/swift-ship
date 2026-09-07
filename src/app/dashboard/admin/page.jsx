import AdminDashboard from '@/app/components/dashboard/admin/AdminDashboard';
import { auth } from '@/app/lib/auth';
import { getHubs } from '@/app/lib/getHubs';
import { headers } from 'next/headers';
import React from 'react';

const AdminDashboardPage = async () => {
    const session = await auth.api.getSession({
                   headers: await headers(),
                 });
                 const admin = session?.user

        const hubs = await getHubs()
        console.log("hubs", hubs)
    return (
        <div>
            <AdminDashboard admin = {admin} hubs= {hubs}/>
        </div>
    );
};

export default AdminDashboardPage;
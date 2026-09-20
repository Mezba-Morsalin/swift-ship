import RiderDashboard from "@/app/components/dashboard/rider/RiderDashboard";
import { auth } from "@/app/lib/auth";
import { getRiders } from "@/app/lib/getRiders";

import { headers } from "next/headers";

const RiderDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const riders = await getRiders();

  const rider = riders.data.find((item) => item.userId === user?.id);

  console.log("rider", rider)

  return (
    <div>
      <RiderDashboard user={user} rider={rider} />
    </div>
  );
};

export default RiderDashboardPage;
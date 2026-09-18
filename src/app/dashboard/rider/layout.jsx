import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const getSessionUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
};

const requireRole = async (role) => {
  const user = await getSessionUser();

  if (!user) {
    redirect("/signin");
  }

  if (user?.role !== role) {
    redirect("/unauthorized");
  }

  return user;
};

const MerchantLayout = async ({ children }) => {
  await requireRole("rider");

  return <>{children}</>;
};

export default MerchantLayout;
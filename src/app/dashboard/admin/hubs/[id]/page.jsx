import HubDetails from "@/app/components/dashboard/admin/HubDetails";
import { getHubs } from "@/app/lib/getHubs";

const HubDetailsPage = async ({ params }) => {
  const { id } = await params;

  const response = await getHubs();

  const hubs = Array.isArray(response)
    ? response
    : response?.data || [];

  const hub = hubs.find(
    (item) => String(item?._id) === String(id)
  );

  console.log("ID:", id);
  console.log("HUB:", hub);

  if (!hub) {
    return (
      <div className="p-10">
        <h1 className="text-xl font-bold">
          Hub not found
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Requested ID: {id}
        </p>
      </div>
    );
  }

  return <HubDetails hub={hub} />;
};

export default HubDetailsPage;
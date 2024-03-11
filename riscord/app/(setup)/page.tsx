import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  // If profile exists, find the server that the user is in
  const server = await db.server.findFirst({
    where: {
      members: {
        some: { profileID: profile.id },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModal/>;
};

export default SetupPage;

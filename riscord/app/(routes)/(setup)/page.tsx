// import { initialProfile } from "@/lib/initial-profile";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  // const profile = await initialProfile();

  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: { profileID: profile.id },
  //     },
  //   },
  // });

  // if (server) {
  //   return redirect(`/servers/${server.id}`);
  // }
  return (
    <div className="">
      <p
        className="text-3xl font-bold
•text-indigo-500"
      >
        Hello Riscord!
      </p>
      <Button>Click me!</Button>
    </div>
  );
};

export default SetupPage;

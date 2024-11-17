import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ConfigurationCard from "@/features/wizard/components/configuration-card";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();

  if (user === null) redirect("/sign-in");

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="max-w-2xl w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          Добро пожаловать,{" "}
          {user.firstName
            ? user.firstName
            : user.emailAddresses[0].emailAddress}{" "}
          👋
        </h2>
        <p className="text-base font-medium text-muted-foreground">
          Давайте начнём с настройки приложения, чтобы оно соответствовало вашим
          требованиям.
        </p>
        <Separator className="my-1" />
        <ConfigurationCard />
      </div>
    </div>
  );
}

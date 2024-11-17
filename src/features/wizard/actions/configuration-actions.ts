"use server";

import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export async function updateCurrencyAction(currency: string) {
  const user = await currentUser();

  if (user === null) redirect("/sign-in");

  var preferences = await prisma.preferences.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (preferences === null) {
    return await prisma.preferences.create({
      data: {
        userId: user.id,
        currency: currency,
      },
    });
  }

  return await prisma.preferences.update({
    where: {
      userId: user.id,
    },
    data: {
      currency: currency,
    },
  });
}

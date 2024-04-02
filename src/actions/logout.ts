"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // This is if you want to do some server stuff

  await signOut();
};

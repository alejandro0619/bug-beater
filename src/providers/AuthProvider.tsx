"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { User } from "@/lib/data";

import parseUserFromImgUrl from "@/lib/parseUserId";
import { retrieveUserFromId } from "@/app/api/services/fetching";
export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { isAuthenticated, getUser } = useKindeBrowserClient();
  const kindeUser = getUser();

  useEffect(() => {
    if (!isAuthenticated || !kindeUser || !kindeUser.picture) {
      // assume the user always have a picture
      setUser(undefined);
      return;
    }
    const [err, userId] = parseUserFromImgUrl(kindeUser.picture);
    if (err || !userId) {
      setUser(undefined);
      return;
    }
    retrieveUserFromId(userId).then((data) => setUser({ info: data }));

  }, [isAuthenticated]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

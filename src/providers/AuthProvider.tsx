"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { User } from "@/lib/data";

import parseUserFromImgUrl from "@/lib/parseUserId";
import { retrieveUserFromId } from "@/app/api/services/fetching";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { isAuthenticated, getUser } = useKindeBrowserClient();


  useEffect(() => {
    if (!isAuthenticated) {
      // assume the user always have a picture
      setUser(undefined);
      return;
    }
    const kindeUser = getUser() // get he user information only when he's proven to be authenticated
    
    if (!kindeUser || !kindeUser.picture) {
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

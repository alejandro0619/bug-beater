"use client";
import React, { createContext,useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { User } from "@/lib/data";

import parseUserFromImgUrl from "@/lib/parseUserId";
import { fecthUser } from "@/app/api/services/fetching";

export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { isAuthenticated, getUser } = useKindeBrowserClient();


  useEffect(() => {
    if (!isAuthenticated) return

    const kindeUser = getUser() // get the user information only when he's proven to be authenticated
    
    if (!kindeUser || !kindeUser.picture) return;

    const [err, userId] = parseUserFromImgUrl(kindeUser.picture);

    if (err || !userId) return;

    fecthUser(userId).then((data) => setUser(data));

  }, [isAuthenticated]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

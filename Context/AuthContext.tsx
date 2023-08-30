"use client";

import { SessionProvider } from "next-auth/react";

interface children {
  children: React.ReactNode;
}
const AuthContext = ({ children }: children) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;

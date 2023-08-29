"use client";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "club",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html>
      <body className={inter.className}>
        {" "}
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}

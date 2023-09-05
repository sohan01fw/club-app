import AuthContext from "@/Utils/custom_components/AuthContext";
import "../globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club",
  description: "Best way to hangout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={inter.className}>{children}</body>
      </AuthContext>
    </html>
  );
}

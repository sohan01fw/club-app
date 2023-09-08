import AuthContext from "@/Utils/custom_components/AuthContext";
import "../globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/Components/Theme-provider";
import Logo from "@/Components/Home-page/TopNav";
import LeftNav from "@/Components/Home-page/LeftNav";
import SuggestBar from "@/Components/Home-page/SuggestBar";
import Bottombar from "@/Components/Home-page/Bottombar";

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
        <body className={`${inter.className} flex flex-col`}>
          <Logo />
          <main className="flex justify-between">
            <LeftNav />
            {children}
            <SuggestBar />
          </main>
          <Bottombar />
        </body>
      </AuthContext>
    </html>
  );
}

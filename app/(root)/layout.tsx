import AuthContext from "@/Utils/custom_components/AuthContext";
import "../globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Logo from "@/Components/Home-page/TopNav";
import LeftNav from "@/Components/Home-page/LeftNav";
import SuggestBar from "@/Components/Home-page/SuggestBar";
import Bottombar from "@/Components/Home-page/Bottombar";
import { Suspense } from "react";
import Loading from "./loading";
import { ConnectToDB } from "@/lib/mongoose";
import { ThemeProvider } from "@/Components/Theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club",
  description: "Best way to hangout",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ConnectToDB();
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${inter.className} flex flex-col`}>
          <ThemeProvider>
            <Logo />
            <main className="flex justify-between w-full ">
              <LeftNav />

              <Suspense fallback={<Loading />}>{children}</Suspense>

              <SuggestBar />
            </main>
            <Bottombar />
          </ThemeProvider>
        </body>
      </AuthContext>
    </html>
  );
}

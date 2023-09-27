import AuthContext from "@/Utils/custom_components/AuthContext";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Logo from "@/Components/Home-page/TopNav";
import SuggestBar from "@/Components/Home-page/SuggestBar";
import NavigationBar from "@/Components/Home-page/NavigationBar";

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
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${inter.className} flex flex-col`}>
          <Logo />
          <main className="flex justify-between w-full ">
            <NavigationBar />
            {children}

            <SuggestBar />
          </main>
        </body>
      </AuthContext>
    </html>
  );
}

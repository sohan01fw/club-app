import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/Components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} bg-slate-50`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

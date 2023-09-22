import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/Components/ui/toaster";
import AuthContext from "@/Utils/custom_components/AuthContext";
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
        <AuthContext>
          {children}
          <Toaster />
        </AuthContext>
      </body>
    </html>
  );
}

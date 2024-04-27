import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import "@/app/global.css";
import { AuthProvider } from "@/providers/AuthProvider";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"], style: "normal", weight: "400" });

export const metadata: Metadata = {
  title: "Bug Beater",
  description: "A web tracker to follow issues and PR in your projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <>
          <Navbar />
          {children}
          </>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import 'tailwindcss/tailwind.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "@/components/Navbar";
import {ReactNode} from "react";
import '@/app/global.css'
config.autoAddCss = false

const montserrat = Montserrat({ subsets: ["latin"], style: 'normal', weight: "400"});

export const metadata: Metadata = {
  title: "Bug Beater",
  description: "A web tracker to follow issues and PR in your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Navbar user='alejandro lopez' />
        {children}
        </body>
    </html>
  );
}

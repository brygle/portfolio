"use client";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "./globals.css";

import { Providers } from '@/redux/providers';
import Navbar from "./components/Nav/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <Providers>
          <Navbar></Navbar>
          { children }
        </Providers>
      </body>
    </html>
  );
}

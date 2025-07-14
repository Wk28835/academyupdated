// NEW: src/app/layout.tsx

import "../../src/app/globals.css"
import "./globals.css";

import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

<link
  href="https://fonts.googleapis.com/css2?family=Adamina&family=League+Spartan:wght@400;500;700&family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&family=Roboto+Condensed:wght@400;700&display=swap"
  rel="stylesheet"
/>



export const metadata = {
  title: "Quran Academy",
  description: "Your App Description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

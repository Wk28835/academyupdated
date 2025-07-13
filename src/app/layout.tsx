// NEW: src/app/layout.tsx

import "../../src/app/globals.css"
import "./globals.css";

import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
  rel="stylesheet"
/>




export const metadata = {
  title: "Your App Title",
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

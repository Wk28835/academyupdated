// NEW: src/app/layout.tsx

import "../../src/app/globals.css"
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

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

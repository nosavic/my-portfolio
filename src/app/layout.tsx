import React from "react";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <Provider attribute="class"> */}

      <body>{children}</body>
      {/* </Provider> */}
    </html>
  );
}

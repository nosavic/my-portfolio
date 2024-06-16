"use client";
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { useAtom } from "jotai";
import { themeAtom } from "../../atom";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <html>
      {/* <Provider attribute="class"> */}

      <body className={`${theme ? "bg-black" : "bg-white"}`}>{children}</body>
      {/* </Provider> */}
    </html>
  );
}

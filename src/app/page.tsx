"use client";

import Top from "../../components/Top";
import NavBar from "../../components/Navbar";
import { ThemeProvider as Provider } from "next-themes";

export default function Home() {
  return (
    <Provider attribute="class">
      <main className="relative">
        <NavBar />
        <Top />
      </main>
    </Provider>
  );
}

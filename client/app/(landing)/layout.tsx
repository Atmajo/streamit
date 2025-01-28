import React from "react";
import Navbar from "./_components/navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}

export default layout;

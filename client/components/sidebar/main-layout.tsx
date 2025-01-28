import React from "react";
import { Sidebar, useSidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <main
        className={cn(
          "flex-1 transition-all duration-500 ease-in-out px-6 py-5",
          isOpen ? "ml-[23rem]" : "ml-32"
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

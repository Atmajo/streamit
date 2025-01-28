"use client";

import React from "react";
import { SidebarProvider } from "@/components/sidebar/sidebar";
import MainLayout from "@/components/sidebar/main-layout";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MainLayout>{children}</MainLayout>
    </SidebarProvider>
  );
}

export default layout;

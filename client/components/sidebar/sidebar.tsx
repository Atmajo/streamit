"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { LogOut, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { sidebardata, sidebarmenu } from "@/constants";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

// Add proper typing for the context
interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const value = {
    isOpen,
    toggle,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="fixed top-0 left-0 h-full">
      <div
        className={cn(
          "transition-all duration-300 ease-in-out mx-5 py-5",
          isOpen ? "w-80" : "w-20"
        )}
      >
        <aside
          className={`relative bg-[#181b21] flex flex-col h-[95vh] w-full transition-all duration-500 ease-in-out rounded-xl`}
        >
          <button
            onClick={toggle}
            className="absolute -right-3 top-7 bg-[#303236] border border-gray-700 rounded-full p-1 hover:bg-gray-700 text-white"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>

          <div className="px-5 py-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-purple-500 flex-shrink-0" />
              {isOpen && (
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  GoLive
                </span>
              )}
            </div>
          </div>

          <nav className={cn("flex-1", isOpen ? "px-5" : "px-2")}>
            <div className="space-y-1 mb-8">
              {sidebarmenu.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center ${
                    isOpen ? "space-x-3 px-4 py-3" : "justify-center py-2"
                  } rounded-lg text-sm ${
                    item.active
                      ? "bg-[#303236] text-white"
                      : "text-gray-400 hover:bg-[#303236] hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {isOpen && <span>{item.label}</span>}
                </a>
              ))}
            </div>

            {!isOpen && <Separator />}
            <div className="mt-8">
              {isOpen && (
                <h3 className="text-gray-400 text-sm font-medium px-4 mb-2">
                  Your Streams
                </h3>
              )}
              <div className="space-y-1">
                {sidebardata.map((stream, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 px-4 py-2 hover:bg-[#303236] rounded-lg cursor-pointer"
                  >
                    <img
                      src={stream.image}
                      alt={stream.title}
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                    {isOpen && (
                      <span className="text-sm text-gray-300">
                        {stream.title}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>

          <div className={cn("py-6", isOpen ? "px-5" : "px-2")}>
            <button
              className={`flex items-center ${
                isOpen ? "space-x-3 px-4 py-3" : "justify-center py-2"
              }  w-full text-gray-400 hover:bg-[#303236] hover:text-white rounded-lg text-sm`}
            >
              <LogOut className="w-5 h-5" />
              {isOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

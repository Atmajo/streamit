import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-opacity-95 bg-gray-900 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              GoLive
            </span>
          </div>
          <div className="flex space-x-4">
            <Link href="/login">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="flex justify-center items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

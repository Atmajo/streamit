import React from "react";
import Profile from "../profile";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center py-2">
      <Profile />
    </nav>
  );
};

export default Navbar;

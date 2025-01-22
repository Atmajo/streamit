import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-3">
      <h1 className="text-xl font-extrabold">StreamIt</h1>
      <div className="space-x-3">
        <Link href={"/sign-in"}>
          <Button variant={"secondary"}>Sign In</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button variant={"default"}>Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

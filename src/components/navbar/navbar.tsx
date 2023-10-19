"use client";
import React from "react";

import UserNavbar from "@/components/navbar/navbarComps/userNavbar";
import NavbarLogo from "@/components/navbar/navbarComps/navbarLogo";
import NavbarMenuİtems from "./navbarComps/navbarMenuİtems";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="lg:fixed lg:block hidden lg:w-[250px] w-0 border-r-2  h-screen ">
        <div className="flex flex-col h-full justify-between mx-3 ">
          <div>
            <NavbarLogo />
            <NavbarMenuİtems />
          </div>
          <UserNavbar />
        </div>
      </div>

      <div className="lg:hidden flex flex-row justify-between items-center mx-2">
        <NavbarLogo />
        <Sheet>
          <SheetTrigger>
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex h-[98%] flex-col justify-between items-center">
              <div className="flex flex-col w-full items-start">
                <NavbarLogo />
                <NavbarMenuİtems />
              </div>
              <UserNavbar />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;

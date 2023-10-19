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
      <div className="hidden lg:flex lg:flex-col flex-row  justify-between lg:w-[250px] w-full h-screen items-start pt-3 px-5 border-r-2 ">
        <div>
          <NavbarLogo />
          <NavbarMenuİtems />
        </div>
        <UserNavbar />
      </div>

      <div className="lg:hidden flex flex-row justify-between items-center">
        <NavbarLogo />
        <Sheet>
          <SheetTrigger>
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex h-[98%] flex-col justify-between items-center">
              <div className="flex flex-col w-full items-center">
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

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
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = React.useState(true);
  return (
    <>
      <div
        className={`${
          navbarToggle ? "w-[300px]" : "w-[80px]"
        } lg:flex hidden  mr-5 h-screen `}
      >
        <div className="flex lg:fixed p-4 flex-col h-full justify-between items-center  border-r-2">
          <div>
            <div className="flex items-center  ">
              <NavbarLogo
                navbarToggle={navbarToggle}
                setNavbarToggle={setNavbarToggle}
              />
              <Switch
                className={navbarToggle ? "block ml-4" : "hidden"}
                checked={navbarToggle}
                onCheckedChange={setNavbarToggle}
                aria-readonly
              />
            </div>
            <NavbarMenuİtems navbarToggle={navbarToggle} />
          </div>
          <UserNavbar navbarToggle={navbarToggle} />
        </div>
      </div>

      <div className="lg:hidden flex flex-row justify-between items-center mx-2">
        <NavbarLogo
          navbarToggle={navbarToggle}
          setNavbarToggle={setNavbarToggle}
        />
        <Sheet>
          <SheetTrigger
            onClick={() => {
              setNavbarToggle(true);
            }}
          >
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex h-[98%] flex-col justify-between items-center">
              <div className="flex flex-col w-full items-start">
                <NavbarLogo
                  navbarToggle={navbarToggle}
                  setNavbarToggle={setNavbarToggle}
                />
                <NavbarMenuİtems navbarToggle={navbarToggle} />
              </div>
              <UserNavbar navbarToggle={navbarToggle} />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;

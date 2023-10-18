import React from "react";

const NavbarLogo = () => {
  return (
    <div className="flex items-center mb-5 mt-2 lg:ml-0 ml-2">
      <img className="rounded-full w-[50px]" src="/logo.jpg" />
      <h1 className="text-2xl font-bold pl-3">Microprefix</h1>
    </div>
  );
};

export default NavbarLogo;

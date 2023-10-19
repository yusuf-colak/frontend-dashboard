import React from "react";

const NavbarLogo = ({ navbarToggle, setNavbarToggle }) => {
  return (
    <div className="flex items-center my-6 ">
      <img
        className="rounded-full w-[50px]"
        src="/logo.jpg"
        onClick={() => {
          setNavbarToggle(true);
        }}
      />
      {navbarToggle && <h1 className="text-2xl font-bold pl-3">Microprefix</h1>}
    </div>
  );
};

export default NavbarLogo;

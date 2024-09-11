import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import NavButton from "../buttons/NavButton";
import SideBar from "./SideBar";

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  const [isOpen, setIsOpen] = useState(false);
  const scroll = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.body.appendChild(div);
    return () => div.remove();
  }, []);
  return (
    <nav class="bg-gray-900 w-full">
      <div class="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src=""
            class="h-8"
            alt=""
          /> */}
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Alaska Group
          </span>
        </Link>
        <div class="flex flex-row desktop:hidden items-center order-2 desktop:order-2 space-x-3 md:space-x-0">
          <button
            onClick={() => setIsOpen(true)}
            className="hamburger-menu text-white text-3xl"
          >
            <IoMenu />
          </button>
        </div>
        <div class="items-center justify-between w-full desktop:flex md:w-auto">
          <div class="hamburger-menu-list flex flex-row items-center font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-gray-900">
            <NavButton isActive={isActive("/")} to={"/"} title={"Home"} />
            <NavButton
              isActive={isActive("/about")}
              to={"/about"}
              title={"About"}
            />
            <NavButton
              isActive={isActive("/services")}
              to={"/services"}
              title={"Services"}
            />
            <NavButton
              isActive={isActive("/pricing")}
              to={"/pricing"}
              title={"Pricing"}
            />
            <NavButton
              isActive={isActive("/contact")}
              to={"/contact"}
              title={"Contact"}
            />
            <button
              type="button"
              class="flex py-2 px-3 border-2 border-white text-white font-medium text-sm  md:me-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              Sell With Us
            </button>
          </div>
        </div>
      </div>
      <SideBar isMounted={isOpen} unMount={() => setIsOpen(false)} />
    </nav>
  );
}

export default Navbar;

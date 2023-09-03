import { useState } from "react";
import { navbarData } from "../../data/navbarData";
import AllImages from "../../allImages";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import CopyRight from "../copyRight";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className={`bg-white z-20 border-gray-200 ${
        isNavbarOpen
          ? "h-[100vh] overflow-hidden"
          : "h-auto backdrop-blur-sm bg-white/90"
      } fixed grid w-full`}
    >
      <div className="self-start w-full flex flex-wrap items-center justify-between mx-auto px-[9%] py-4">
        <Link to="/" className="flex items-center">
          <span className="hidden md:block self-center text-[2rem] font-bold ">
            DaVinci
          </span>
          <img
            className="block md:hidden w-[50px] h-[50px]"
            src={AllImages.logo}
            alt="logo"
          />
        </Link>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isNavbarOpen ? (
            <RxCross1 className="w-[61px] h-[61px]" />
          ) : (
            <RxHamburgerMenu className="w-[61px] h-[61px]" />
          )}
        </button>
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto h-full`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8 pt-[50px] md:pt-4">
            {navbarData.map((navbar, index) => (
              <li key={index}>
                <Link
                  to={navbar.href}
                  className={`block py-2 pl-3 pr-4 text-[#000000] text-xl md:text-base text-center ${
                    location.pathname === navbar.href
                      ? "font-semibold"
                      : "font-normal"
                  } rounded`}
                >
                  {navbar.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen && (
        <div className="border-t-[1px] block md:hidden self-end w-full border-[rgba(0,0,0,.1)] py-6 ">
          <CopyRight />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

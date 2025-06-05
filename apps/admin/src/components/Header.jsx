import { Avatar, ClickAwayListener } from "@mui/material";
import logo from "../assets/logo.png";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  isOpenSettings;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="container bg-gray-900 text-white shadow-white-lg mb-16 py-3">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-end">
          {/* Logo Section */}
          <div className="flex-shrink-0 ml-0">
            <a href="/" className="flex items-center" aria-label="Home">
              <img
                src={logo} // Using imported logo for better build optimization
                alt="Company Logo"
                className="w-1/3 ms-12"
                loading="lazy" // Lazy loading for better performance
              />
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 mr-12">          
            <ClickAwayListener onClickAway={() => setIsOpenSettings(false)}>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-gray-700 ring-inset"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setIsOpenSettings(!isOpenSettings)}
                >
                  <Avatar alt="Shailendra Shrestha" src="https://solutiongate.com.np/teams/1671089112.shailendra.jpg" sx={{ width: 36, height: 36 }}/>
                </button>
                {isOpenSettings !== false && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-600 rounded-md bg-gray-900 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div className="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
                      <a
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        My Account
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                      >
                        Roles
                      </a>
                    </div>
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                      >
                        Users
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Data Analysis
                      </a>
                    </div>

                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-6"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </ClickAwayListener>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-8 h-8" // Slightly larger for better touch targets
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Nav mobile />
              <CredSection mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

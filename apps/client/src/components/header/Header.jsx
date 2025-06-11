import { useState } from "react";
import logo from "../../assets/images/logos/projekdir-logo.png";
import Nav from "./nav/Nav";
import CredSection from "./nav/CredSection";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container bg-gray-900 text-white shadow-white-lg mb-16">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between m-0">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-52 ms-6">
            <a href="/" className="flex items-center" aria-label="Home">
              <img
                src={logo} // Using imported logo for better build optimization
                alt="Company Logo"
                className="ms-0 py-3 w-100"
                loading="lazy" // Lazy loading for better performance
              />
            </a>
          </div>

          <Nav />

          <CredSection />
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

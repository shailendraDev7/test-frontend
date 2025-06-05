import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Nav = () => {
  const listItemClasses = `flex justify-center items-center h-[40px] min-w-[100px]`;
  const linkClasses = `block text-2xl uppercase font-bold text-white px-2 py-1 hover:text-orange-500 hover:scale-[1.1] transition-all duration-300 transform whitespace-nowrap`;

  const menuItems = ["home", "projects", "services", "contact"];

  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleProfileMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsProfileExpanded(true);
  };

  const handleProfileMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProfileExpanded(false);
    }, 1000); // Corrected to 10 seconds
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Fixed width for the profile li to prevent shaking of other items
  // It should match the maximum expanded width of the link inside it
  const profileListItemClasses = `flex justify-center items-center w-60 ml-6`;

  // Classes for the Link containing the Avatar and text
  const profileLinkClasses = `
    flex items-center text-2xl uppercase font-bold text-white
    px-2 py-1 hover:text-orange-500
    transition-all duration-300 transform origin-center whitespace-nowrap
  `;

  // Classes for the 'See my Profile' text span
  const profileTextClasses = `
    ${isProfileExpanded ? 'opacity-100 ml-2' : 'opacity-0'}
    transition-opacity duration-300 ease-in-out
  `;

  return (
    <div className="">
      <ul className="flex space-x-6 items-center">
        {menuItems.map((curElem, index) => (
          <li className={listItemClasses} key={index}>
            <Link to={`/${curElem.toLowerCase()}`} className={linkClasses}>
              {curElem}
            </Link>
          </li>
        ))}

        {/* The specific li for the profile with hover effects */}
        <li
          onMouseEnter={handleProfileMouseEnter}
          onMouseLeave={handleProfileMouseLeave}
          className={profileListItemClasses}
        >
          <Link to="/shailendrashrestha-cv" className={profileLinkClasses}>
            {/* Avatar and text are now direct siblings within the Link */}
            <Avatar
              alt="Shailendra Shrestha"
              src="https://solutiongate.com.np/teams/1671089112.shailendra.jpg"
              sx={{
                width: 30,
                height: 30,
                flexShrink: 0, // Keep flexShrink to prevent Avatar compression
                // Apply rotation and translation directly to the Avatar via sx prop
                transition: "transform 0.3s ease-in-out",
                transform: isProfileExpanded
                  ? "translateX(180px)" // Combined rotation and translation
                  : "rotate(0deg) translateX(0px)", // Explicit default state
              }}
            />
            <span className={profileTextClasses}>
              See my Profile
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
// src/components/categories/Categories.jsx
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Categories = () => {
  return (
    <div
      className="p-3 text-xl bg-gray-800 text-gray-200 placeholder-gray-400 border-b-2 bg-gradient-to-t from-zinc-900 to-noneborder-orange-500/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300 
          outline-none"
    >
      <Menu as="div" className="relative inline-block text-left z-20">
        {" "}
        {/* Added z-20 for dropdown stacking */}
        <div>
          <MenuButton
            className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-lg px-3 py-2 pb-2 text-xl shadow-xs tracking-wider uppercase"
          >
            {/* Assuming you want the text to be white by default, and hover to be gray-700 background */}
            Categories
            <ChevronDownIcon
              aria-hidden="true"
              className="size-6 stroke-2"
            />{" "}
            {/* Changed stroke to 2 for common weight */}
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-orange-700 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none
                   data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
        >
          <div className="py-1">
            {/* Use <a> for external links or file downloads */}
            <MenuItem>
              <a
                href="/shailendrashrestha-cv" // Likely a public file or external link
                className="block px-4 py-2 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
              >
                Curriculum Vitae
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/minicss" // Likely a public file or external link
                className="block px-4 py-2 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </a>
            </MenuItem>

            {/* Use Link for internal navigation */}
            <MenuItem>
              {/* The `as={Link}` prop allows Headless UI's MenuItem to render a react-router-dom Link */}
              <Link
                to="/algorithms" // Assuming this is an internal route
                className="block px-4 py-2 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                Algorithms
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/languages" // Assuming this is an internal route
                className="block px-4 py-2 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                Languages
              </Link>
            </MenuItem>

            {/* This 'Tools' item looks like a form submission button */}
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                >
                  Tools
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Categories;

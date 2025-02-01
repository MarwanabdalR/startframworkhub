import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setscrolled] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen);


  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 50){
        setscrolled(true);
      }
      else{
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-700">
      <div className={`${scrolled ? "px-4" : "p-4"} mx-auto max-w-screen-xl sm:px-6 lg:px-8 transform duration-1000`}>
        <div className="flex h-16 items-center justify-between">
          <Link className="block text-teal-600" to="/">
            <span className="uppercase text-white text-3xl font-bold">
              Start Framework
            </span>
          </Link>

          <nav
            aria-label="Global"
            className="hidden md:flex md:items-center md:gap-12"
          >
            <ul className="flex items-center uppercase gap-6 text-sm">
              <li>
                <NavLink
                  className="text-white font-medium transition duration-500 hover:text-white/75"
                  to="/about"
                  activeClassName="text-white/75"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-medium transition duration-500 hover:text-white/75"
                  to="/protofolio"
                  activeClassName="text-white/75"
                >
                  Protofolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-medium transition duration-500 hover:text-white/75"
                  to="/contact"
                  activeClassName="text-white/75"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="block md:hidden rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`
            ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            overflow-hidden transition-all duration-700 ease-in-out
            md:hidden mt-4 bg-gray-800 p-4 rounded-lg
          `}
        >
          <ul className="flex flex-col gap-4 text-white uppercase text-sm">
            <li>
              <NavLink
                className="block font-medium transition duration-500 hover:text-gray-400"
                to="/about"
                activeClassName="text-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block font-medium transition duration-500 hover:text-gray-400"
                to="/protofolio"
                activeClassName="text-gray-400"
              >
                Protofolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block font-medium transition duration-500 hover:text-gray-400"
                to="/contact"
                activeClassName="text-gray-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;


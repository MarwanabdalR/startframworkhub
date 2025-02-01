import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-gray-700">
        <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="uppercase text-white text-3xl font-bold">
                  Start Framework
                </span>
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:gap-12">
              <nav aria-label="Global">
                <ul className="flex items-center uppercase gap-6 text-sm">
                  <li>
                    <a
                      className="text-white font-medium transition hover:text-white/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-medium transition hover:text-white/75"
                      href="#"
                    >
                      Protofolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-medium transition hover:text-white/75"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
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
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } md:hidden mt-4 bg-gray-800 p-4 rounded-lg`}
          >
            <ul className="flex flex-col gap-4 text-white uppercase text-sm">
              <li>
                <a
                  className="block font-medium transition hover:text-gray-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block font-medium transition hover:text-gray-400"
                  href="#"
                >
                  Protofolio
                </a>
              </li>
              <li>
                <a
                  className="block font-medium transition hover:text-gray-400"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

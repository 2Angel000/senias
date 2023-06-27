import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const logoN = "/images/logo_letraB.png";
  const logoB = "/images/logo_letraN.png";

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-betwen">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to={"/home"}>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={process.env.PUBLIC_URL + logoN}
                    alt="Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={process.env.PUBLIC_URL + logoN}
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-5">
                  <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                        : null
                    }
                  >
                    <a
                      className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </NavLink>

                  <NavLink
                    to={"/NS"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                        : null
                    }
                  >
                    <a
                      className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap"
                      aria-current="page"
                    >
                      Lenguaje Natural - Señas
                    </a>
                  </NavLink>
{/* 
                  <NavLink
                    to={"/SN"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                        : null
                    }
                  >
                    <a className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap">
                      Señas - Lenguaje Natural
                    </a>
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                  : null
              }
            >
              <a
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Home
              </a>
            </NavLink>

            <NavLink
              to={"/NS"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                  : null
              }
            >
              <a
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Lenguaje Natural - Señas
              </a>
            </NavLink>
            <NavLink
              to={"/SN"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm"
                  : null
              }
            >
              <a className="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Señas - Lenguaje Natural
              </a>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

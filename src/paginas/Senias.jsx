import React from "react";
import { NavLink } from "react-router-dom";

export default function Senias() {
  const logo = "/images/logo_letraN.png";

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-base text-xl font-semibold text-red-600">
            ¡Hola!
          </h1>
          <p className="mt-4 text-2xl pb-5 font-bold tracking-tight text-gray-700 sm:text-4xl">Bienvenido a mi proyecto personal</p>
          <img
            className="align-center m-auto"
            style={{ width: "45%", height: "45%" }}
            src={process.env.PUBLIC_URL + logo}
            alt="404"
          />
          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-2xl">
            Traductor de Lenguaje Natural a Señas :D
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to={"/"}>
              <a
                href="#"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Comenzar
              </a>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

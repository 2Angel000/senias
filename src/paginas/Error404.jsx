import React from "react";
import { NavLink } from "react-router-dom";

export default function Error404() {
  const i_404 = "/images/404.jpg";

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ¡Oh no!. Página No Encontrada :/
          </h1>
          <img
            className="align-center m-auto"
            style={{ width: "15%", height: "15%" }}
            src={process.env.PUBLIC_URL + i_404}
            alt="404"
          />
          <p className="mt-6 text-base leading-7 text-gray-600">
            Perdon por las molestias, la página que solicitó no existe.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to={"/home"}>
              <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Traductor
              </a>
            </NavLink>
            <NavLink to={"/"}>
              <a href="#" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Página de Inicio
              </a>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

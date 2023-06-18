import React from "react";
import { NavLink } from "react-router-dom";

export default function Flotante() {
  return (
    <>
    <NavLink to={"/"}>
      <button className="fixed bottom-4 right-4 p-4 bg-teal-500 hover:bg-indigo-600 text-white rounded-full shadow-lg">
        Regresar
      </button>
    </NavLink>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Otros() {
  const s = `


`;

  return (
    <>
    <NavLink to={"https://www.academiajournals.com/pubcelaya2022"} target="_blank" rel="noopener noreferrer">
      <ol className="text-gray-700 text-base text-justify">
        <span className="espaciado text-indigo-600 font-bold">
          {
            '"Desarrollo y Construcción de un Prototipo con AlexaSkills Kit (ASK)"'
          }
        </span>
        <p className="pt-2">
          Portal de internet AcademiaJournals.com, con ISSN 1946-5351online,
          Vol. 14, No. 09, 2022.
        </p>
      </ol>
          </NavLink>
    </>
  );
}

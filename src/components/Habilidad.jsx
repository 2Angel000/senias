import React from "react";

export default function Habilidad({habilidad}) {
  return (
    <>
        <span className="inline-block bg-gray-200 
        text-center justify-center
        rounded-full px-3 py-1 text-sm
         font-semibold text-gray-700 mr-2
          hover:bg-teal-400 transition duration-500 ease-in-out">
          {habilidad}
        </span>
    </>
  );
}

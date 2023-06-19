import React from "react";
import Nav from "../Nav";
import { useState } from "react";


export default function NS() {

  const [txtValor, setTxtValor] = useState("");
  
  const handleTextareaChange = (event) =>{
    const value = event.target.value;
    setTxtValor(value);
    
    for(let i=0; i<value.lenght; i++){
      const caracter = value[i];
      //realizado la comparación
      if(caracter >= "a" && caracter <= "z"){
        console.log(`${caracter} es una minuscula?`);
      }
    }
  };

  return (
    <>
      <Nav />
      <section className="relative isolate overflow-hidden bg-white px-5 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-8xl lg:max-w-8xl flex flex-col sm:flex-row">
          <section className=" flex-grow mr-5 ml-5">
            <h3 className="font-bold text-gray-600 mb-10">Lenguaje Natural</h3>
            <textarea
              className="border border-red-200 p-2"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </section>
          <section className="mt-2 mb-2 py-12 flex items-center">
            <span className="text-gray-400 text-2xl m-auto">→</span>
          </section>
          <section className="flex-grow ml-5 mr-5">
            <h3 className="font-bold text-gray-600 mb-10">Señas</h3>
            <textarea
              className="border border-blue-200 p-2"
              name=""
              id=""
              value={txtValor}
              onChange={handleTextareaChange}
              placeholder="Escriba aquí"
              cols="30"
              rows="10"
            ></textarea>
          </section>
        </div>
      </section>
    </>
  );
}

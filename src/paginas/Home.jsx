import React from "react";
import Nav from "../Nav";
import Flotante from "../components/Flotante";

export default function Home() {
  const logo = "/images/logo_letraN.png";

  return (
    <>
      <Nav />
      <div className="bg-white">
        <main>
          <div class="grid grid-cols-2 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-19">
            <div className="mt-12 select-none">
              <img  src={process.env.PUBLIC_URL + logo} alt="" />
            </div>
            <div className="mt-12">
              <h1 className="text-black font-bold text-2xl">
                PROPÓSITO
              </h1>
              <p className="m-4 text-justify">
                <span className="espaciado"/>El presente proyecto ha sido creado con el fin de poder entablar una comunicacón efectiva
                entre usuarios del lenguaje de señas{' (LSM) '}y la comunicación oral, esto para facilitar la comprensión entre 
                personas que desconozcan el lenguaje de señas y necesiten comunicarse con sus allegados, o viceversa, de esta forma
                este proyecto tiene enfoque en ayudar satisfactoriamente a las personas que lo necesiten.
                <br /> <br />
                <span className="espaciado"/>Quiero mencionar que el presente proyecto queda sujeto a futuras mejoras, así como futuras integraciones y funcionalidades
                que pueden ser agregadas para una traducción de lenguaje efectiva y satisfactoria.
              </p>
              <p className="pt-2 italic text-gray-500 text-justify">
                Atentamente: Florencio Martinez Miguel Ángel
              </p>
            </div>
          </div>
          <Flotante />
        </main>
      </div>
    </>
  );
}
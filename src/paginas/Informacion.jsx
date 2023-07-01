import React from "react";
import Habilidad from "../components/Habilidad";
import Contact from "../components/Contact";
import Conocimientos from "../components/Conocimientos";
import Otros from "../components/Otros";
import Flotante from "../components/Flotante";

export default function Informacion() {
  const imgPerfil = `/images/yo.jpg`;
  
  const habilidades = [
    {
      habilidad: "Resiliencia",
    },
    {
      habilidad: "Trabajo en Equipo",
    },
    {
      habilidad: "Trato al cliente",
    },
    {
      habilidad: "Responsable",
    },
    {
      habilidad: "Liderazgo",
    },
    {
      habilidad: "Proactivo",
    },
  ];

  return (
    <>
      <div className="bg-white m-1 p-10">
        <div className="rounded overflow-hidden shadow-lg bg-gray-100 general">
          <img
            className="w-full rounded-full m-auto"
            src={process.env.PUBLIC_URL+imgPerfil}
            alt="Imagen de perfil"
            style={{ width: "290px", height: "290px", marginTop: "20px" }}
          />
          <Flotante />
          <div className="inline-block py-4 pb-1 text-justify">
            <div className="font-bold text-xl mb-2">
              <i
                className="fas fa-duotone fa-address-card"
                style={{ color: "#5F0B74" }}
              />
              <span className="espaciado">Florencio Martinez Miguel Ángel</span>
            </div>
            <p className="text-gray-700 text-base">
              <i
                className="fas fa-solid fa-graduation-cap"
                style={{ color: "#1398C8" }}
              />
              <span className="espaciado">
                Ingeniería en Sistemas Computacionales
              </span>
              <span className="espaciado text-green-600 font-medium italic">
                2019 - Actualidad
              </span>
            </p>
            <p className="text-gray-700 text-base">
              <i className="fas fa-location-dot" style={{ color: "#C81313" }} />
              <span className="espaciado">Chilpancingo, Guerrero, México</span>
            </p>
          </div>

          <div className="pb-10 habilidades">
            {habilidades.map((habilidad, index) => (
              <Habilidad key={index} habilidad={habilidad.habilidad} />
            ))}
          </div>

          <div className="px-6 pt-5 mb-8 py-4 h-56 grid grid-cols-4 mt-8 gap-4 content-center
          informacion">
            <div className="inline-block py-4">
              <div className="font-bold text-xl mb-2">Contacto</div>
              <Contact />
            </div>

            <div className="inline-block py-4 m-auto col-span-2 content-center">
              <div className="font-bold text-xl mb-2">Conocimientos</div>
              <Conocimientos />
            </div>

            <div className="inline-block py-4">
              <div className="font-bold text-xl mb-2">Publicaciones</div>
              <Otros />
            </div>
          </div>
        </div>

        <div className="sm:hidden">

        <img
            className="w-full rounded-full m-auto"
            src={process.env.PUBLIC_URL+imgPerfil}
            alt="Imagen de perfil"
            style={{ width: "290px", height: "290px", marginTop: "20px" }}
          />
          <Flotante />
          <div className="inline-block py-4 pb-1 text-justify">
            <div className="font-bold text-xl mb-2">
              <i
                className="fas fa-duotone fa-address-card"
                style={{ color: "#5F0B74" }}
              />
              <span className="espaciado">Florencio Martinez Miguel Ángel</span>
            </div>
            <p className="text-gray-700 text-base">
              <i
                className="fas fa-solid fa-graduation-cap"
                style={{ color: "#1398C8" }}
              />
              <span className="espaciado">
                Ingeniería en Sistemas Computacionales
              </span>
              <span className="espaciado text-green-600 font-medium italic">
                2019 - Actualidad
              </span>
            </p>
            <p className="text-gray-700 text-base">
              <i className="fas fa-location-dot" style={{ color: "#C81313" }} />
              <span className="espaciado">Chilpancingo, Guerrero, México</span>
            </p>
          </div>

          <div className="pb-10 habilidades">
            {habilidades.map((habilidad, index) => (
              <Habilidad key={index} habilidad={habilidad.habilidad} />
            ))}
          </div>

          <div className="px-6 pt-5 mb-8 py-4 h-56 grid grid-cols-4 mt-8 gap-4 content-center
          informacion">
            <div className="inline-block py-4">
              <div className="font-bold text-xl mb-2">Contacto</div>
              <Contact />
            </div>

            <div className="inline-block py-4 m-auto col-span-2 content-center">
              <div className="font-bold text-xl mb-2">Conocimientos</div>
              <Conocimientos />
            </div>

            <div className="inline-block py-4">
              <div className="font-bold text-xl mb-2">Publicaciones</div>
              <Otros />
            </div>
          </div>

        </div>


      </div>
    </>
  );
}

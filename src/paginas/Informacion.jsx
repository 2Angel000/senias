import React from "react";
import Habilidad from "../components/Habilidad";
import Contact from "../components/Contact";
import Conocimientos from "../components/Conocimientos";
import Otros from "../components/Otros";
import Flotante from "../components/Flotante";

export default function Informacion() {
  const imgPerfil = `https://scontent.fcvj2-1.fna.fbcdn.net/v/t39.30808-6/279434543_2280948688720004_8460385405030603582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHTFYaXLmVx1nR7WCtBnnb7GxFBbV6XHiUbEUFtXpceJaRwiSC4_1MXBMPLa6NAPwNeWKnWRrUplgCCs5n8k9Q0&_nc_ohc=DEO23VNBG_wAX_6Z0la&_nc_ht=scontent.fcvj2-1.fna&oh=00_AfAm3Ie1GsmWyT4JRNRn3h3-0UYLgnCwacqakpKyFtNdtg&oe=648FBBE8`;
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
        <div className=" rounded overflow-hidden shadow-lg bg-gray-100">
          <img
            className="w-full rounded-full m-auto"
            src={imgPerfil}
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

          <div className="pb-12">
            {habilidades.map((habilidad, index) => (
              <Habilidad key={index} habilidad={habilidad.habilidad} />
            ))}
          </div>

          <div className="px-6 pt-5 mb-8 py-4 h-56 grid grid-cols-4 mt-8 gap-4 content-center">
            <div className="inline-block py-4">
              <div className="font-bold text-xl mb-2">Contacto</div>
              <Contact />
            </div>

            <div className="inline-block py-4 m-auto col-span-2">
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

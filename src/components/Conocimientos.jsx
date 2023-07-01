import React from "react";

export default function Conocimientos() {
  return (
    <>
      <ul className="text-justify m-auto pl-12 pb-12 espaciado sep">
        <li className="text-gray-700 text-base">
          <span className="text-teal-600 font-bold">{"{ }"}</span>
          <span className="espaciado text-teal-600">
            Lenguajes de Programación
          </span>
          <p>Java, JavaScript, HTML/CSS, PHP, Dart</p>
        </li>

        <li className="text-gray-700 text-base">
          <i className="fa-sharp fa-solid fa-gears text-teal-600"/>
          <span className="espaciado text-teal-600">Frameworks/Librerías</span>
          <p>Laravel, React, Bootstrap, Flutter, TailwindCSS</p>
        </li>

        <li className="text-gray-700 text-base">
          <i className="fa-solid fa-terminal text-teal-600" />
          <span className="espaciado text-teal-600">
            Entornos de desarrollo
          </span>
          <p>Visual Studio Code, Android Studio, IntelliJ, NetBeans</p>
        </li>

        <li className="text-gray-700 text-base">
          <i className="fa-solid fa-database text-teal-600" />
          <span className="espaciado text-teal-600">Bases de datos</span>
          <p>MySQL, Oracle, Firebase</p>
        </li>

        <li className="text-gray-700 text-base pb-3">
          <i className="fa-brands fa-git text-teal-600" />
          <span className="espaciado text-teal-600">Otras</span>
          <p>
            GitHub/Git, Photoshop, Blender, Cisco, Paquetería
            Microsoft
          </p>
        </li>
      </ul>
    </>
  );
}

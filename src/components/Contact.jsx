import React from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {

    const email = 'L19520312@chilpancingo.tecnm.mx';
    const mailtoURL = `mailto:${email}`;

  return (
    <>
      <ul className="text-justify m-auto pl-12 pb-5 espaciado">
        <li className="text-gray-700 text-base">
          <NavLink to={"https://wa.me/qr/QWHKB2HYZV7TI1"} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp" style={{ color: "#22931a" }} />
            <span className="espaciado text-green-600">WhatsApp</span>
          </NavLink>
        </li>

        <li className="text-base">
          <NavLink to={"https://www.facebook.com/miguelangel.mrtinez"} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook" style={{ color: "#3A69A9" }} />
            <span className="espaciado text-blue-500">Facebook</span>
          </NavLink>
        </li>

        <li className="text-base">
          <NavLink to={"https://github.com/2Angel000?tab=repositories"} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" style={{ color: "#171515" }} />
            <span className="espaciado text-black">GitHub</span>
          </NavLink>
        </li>

        <li className="text-base">
          <NavLink to={"https://www.linkedin.com/in/mangel13/"} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ color: "#0B4784" }} />
            <span className="espaciado text-blue-400">Linkedin</span>
          </NavLink>
        </li>

        <li className="text-base">
          <NavLink to={mailtoURL} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope" style={{ color: "#7E1E95" }} />
            <span className="espaciado text-violet-700">Email</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
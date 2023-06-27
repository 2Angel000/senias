import React, { useState } from "react";

export default function ImageMapping() {
  const [inputText, setInputText] = useState("");

  const imageMapping = {
    a: "images/Logo.png",
    b: "images/Logo.png",
    c: "images/Logo.png",
    d: "images/Logo.png",
    e: "images/Logo.png",
    f: "images/Logo.png",
    g: "images/Logo.png",
    h: "images/Logo.png",
    i: "images/Logo.png",
    j: "images/Logo.png",
    k: "images/Logo.png",
    l: "images/Logo.png",
    m: "images/Logo.png",
    n: "images/Logo.png",
    o: "images/Logo.png",
    p: "images/Logo.png",
    q: "images/Logo.png",
    r: "images/Logo.png",
    s: "images/Logo.png",
    t: "images/Logo.png",
    u: "images/Logo.png",
    w: "images/Logo.png",
    v: "images/Logo.png",
    x: "images/Logo.png",
    y: "images/Logo.png",
    z: "images/Logo.png",
  };

  const processText = (event) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);
  };

  const getImageElements = () => {
    const imageElements = [];

    for (let i = 0; i < inputText.length; i++) {
      const character = inputText.charAt(i);

      if (character === " ") {
        // Si el carácter es un espacio en blanco, agregamos un espacio vacío en lugar de una imagen
        imageElements.push(<span key={i}>&nbsp;</span>);
      } else if (imageMapping.hasOwnProperty(character)) {
        const imageSrc = `${process.env.PUBLIC_URL}/${imageMapping[character]}`;
        imageElements.push(<img key={i} src={imageSrc} alt={character} />);
      }
    }

    return imageElements;
  };

  return (
    <div>
      <textarea value={inputText} onChange={processText} rows="4" cols="50" />
      <div className="inline-flex" style={{ height: "10%", width: "10%" }}>
        {getImageElements()}
      </div>
    </div>
  );
}

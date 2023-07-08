import React from "react";
import Nav from "../Nav";
import { useState } from "react";

export default function NS() {
  const [inputText, setInputText] = useState("");

  const imageMapping = {
    a: "images/a.png",
    b: "images/b.png",
    c: "images/c.png",
    d: "images/d.png",
    e: "images/e.png",
    f: "images/f.png",
    g: "images/g.png",
    h: "images/h.png",
    i: "images/i.png",
    j: "images/j.png",
    k: "images/k.png",
    l: "images/l.png",
    m: "images/m.png",
    n: "images/n.png",
    ñ: "images/ñ.png",
    o: "images/o.png",
    p: "images/p.png",
    q: "images/q.png",
    r: "images/r.png",
    s: "images/s.png",
    t: "images/t.png",
    u: "images/u.png",
    w: "images/w.png",
    v: "images/v.png",
    x: "images/x.png",
    y: "images/y.png",
    z: "images/z.png",
  };

  const processText = (event) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);
  };

  const getImageElements = () => {
    const imageElements = [];
    let wordIndex = 0;
    let currentWord = "";

    for (let i = 0; i < inputText.length; i++) {
      const character = inputText.charAt(i);

      if (character === " ") {
        // Si el carácter es un espacio en blanco, agregamos un espacio vacío en lugar de una imagen
        imageElements.push(
          <div key={i} className="flex">
            {currentWord.split("").map((char, index) => (
              <div key={index} className="mr-2">
                {imageMapping.hasOwnProperty(char) && (
                  <img
                    src={`${process.env.PUBLIC_URL}/${imageMapping[char]}`}
                    alt={char}
                  />
                )}
              </div>
            ))}
            <span className="ml-2">&nbsp;</span>
          </div>
        );
        currentWord = "";
        wordIndex++;
      } else if (imageMapping.hasOwnProperty(character)) {
        const imageSrc = `${process.env.PUBLIC_URL}/${imageMapping[character]}`;
        currentWord += character;
        if (i === inputText.length - 1) {
          // Si es el último carácter, agregamos la palabra completa
          imageElements.push(
            <div key={i} className="flex">
              {currentWord.split("").map((char, index) => (
                <div key={index} className="mr-2">
                  {imageMapping.hasOwnProperty(char) && (
                    <img
                      src={`${process.env.PUBLIC_URL}/${imageMapping[char]}`}
                      alt={char}
                    />
                  )}
                </div>
              ))}
            </div>
          );
        }
      }
    }

    return imageElements;
  };

  return (
    <>
      <Nav />
      <section className="lg:block relative isolate overflow-hidden bg-white px-5 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left 
        skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1
         ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
        ></div>

        <div className="mx-auto max-w-8xl lg:max-w-8xl flex flex-col sm:flex-row">
          <section
            className="flex-grow mr-5 ml-5 sm:ml-auto"
            style={{ minWidth: "40vw", maxWidth: "80vw" }}
          >
            <h3 className="font-bold text-gray-600 mb-10 sm:text-red-900">
              <i class="fa-solid fa-language" />
              <span className="espacio" /> Lenguaje Natural
            </h3>
            <textarea
              className="border border-red-200 p-2 mt-5 resize-none"
              // w-80 h-40 resize-none border-0 focus:ring-0"
              name=""
              value={inputText}
              onChange={processText}
              cols="30"
              rows="10"
              placeholder="Esquibe aquí"
            ></textarea>
          </section>

          <section className="mt-2 mb-2 py-12 flex items-center">
            <span className="text-gray-400 text-2xl m-auto">→</span>
          </section>

          <section className="flex-grow ml-5 mr-5">
            <h3 className="font-bold text-gray-600 mb-10">
              <i class="fa-solid fa-hands" />
              <span className="espacio" /> Señas
            </h3>
            <div
              className="border border-blue-200 p-2 img-traductor overflow-auto"
              id="imagenes"
              style={{ maxHeight: "30vh", minHeight: "50vh", maxWidth: "80vw" }}
            >
              {getImageElements()}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

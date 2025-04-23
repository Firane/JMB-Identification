import { useState } from "react";
import Itemcard from "../components/itemcard";
import Imagecadenas from "../img/cadenastemplate.png";
import { title } from "process";

const items = [
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
  {
    image: Imagecadenas,
    title: "ELEC. CIRCUIT BREAKER L/O EURO PIS EA",
    alt: "Un cadenas",
  },
];

function deleteArticle() {
  return (
    <div className="delete">
      {items.map((element, index) => (
        <Itemcard
          key={index}
          title={element.title}
          alt={element.alt}
          image={element.image}
          classname="delete"
        />
      ))}
    </div>
  );
}
export default deleteArticle;

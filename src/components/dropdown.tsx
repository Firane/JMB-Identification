import React, { ReactNode, useRef, useState, useEffect } from "react";
import peinture from "../img/photopeinture.png";
import panneau from "../img/photopanneau.png";
import etiquette from "../img/photoetiquette.png";
import numerotation from "../img/photonumerotation.png";
import Dropdowncontent from "./dropdowncontent";

export interface MyDropdownProps {
  image: string;
  title: string;
  classname: string;
  description: string;
  children?: ReactNode | undefined;
}

function Dropdown({
  title,
  classname,
  children,
  image,
  description,
}: MyDropdownProps) {
  /** 
  IsOpen me sert a savoir letat du dropdown
  contentHeight me sert a savoir la taille de la description et d'ajuster dynamiquement la taille du conteneur
  contentRef me permet de cible tout le contenu cache par le dropdown

  isOpen allow me to know the state of the dropdown
  ContentHeight allows me to know the height of the description and so i'm able to adjust dynamically the height of the container
  ContentRef allows me to target the entire content hidden by the dropdown
  **/
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setcontentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dropdownChildrenProps, setdropdownChildrenProps] = useState([
    {
      title: "IDENTIFICATION D'EQUIPEMENT D'USINE",
      image: numerotation,
    },
    { title: "SOLUTION D'ETIQUETAGE VISUEL", image: etiquette },
    {
      title: "PANNEAUX SECURITAIRES",
      image: panneau,
    },
    {
      title: "BALISTAGE ET MARQUAGE AU SOL",
      image: peinture,
    },
    {
      title: "BALISTAGE ET MARQUAGE AU SOL",
      image: peinture,
    },
    {
      title: "BALISTAGE ET MARQUAGE AU SOL",
      image: peinture,
    },
  ]);

  useEffect(() => {
    if (contentRef.current) {
      console.log(contentRef);
      console.log(contentRef.current.offsetHeight);
      setcontentHeight(contentRef.current.offsetHeight);
    }
  }, [isOpen]); // S'exécute uniquement au premier rendu // Executed at the first render

  function animationContainerShow(sibling: any) {
    sibling.animate(
      [
        {
          height: "0px",
        },
        { height: `${contentHeight}px` },
      ],
      {
        fill: "forwards",
        easing: "ease-in-out",
        duration: (contentHeight / 100) * 200,
      }
    );
  } // Ceci me permet de faire grandir l'element dans lequel est contenu le dropdown. // It's made to make the element inside the dropdown grow.

  function animationContainerHide(sibling: any) {
    sibling.animate(
      [
        {
          height: `${contentHeight}px`,
        },
        { height: "0px" },
      ],
      {
        fill: "forwards",
        easing: "ease-in-out",
        duration: (contentHeight / 100) * 200,
      }
    );
  } // Ceci me permet de faire retressir l'element dans lequel est contenu le dropdown. // It's made to shrank the parent element of the dropdown.

  return (
    <div className={classname}>
      <button
        className={`${classname}__button`}
        onClick={(event: React.MouseEvent) => {
          let sibling: any = event.currentTarget.nextElementSibling!;
          if (isOpen) {
            setIsOpen(false);
            animationContainerHide(sibling);
            // animationDropdownHide(sibling);
            event.currentTarget.firstElementChild?.classList.add("enable");
            event.currentTarget.firstElementChild?.classList.remove(
              "default",
              "disable"
            );
          } else {
            setIsOpen(true);
            // animationDropdownShow(sibling);
            animationContainerShow(sibling);
            event.currentTarget.firstElementChild?.classList.add("disable");
            event.currentTarget.firstElementChild?.classList.remove(
              "default",
              "enable"
            ); // sur le click, si setIsOpen est true, je cache tout en jouant les 2 animations prevues a cet effet, je reajuste mes class pour jouer mes animations css (la fleche qui tourne)
          } //Sinon si isOpen est false alors je joue mes 2 animations faites pour montrer le contenu, je reajuste egalement mes class.
          /**
           * On click : if open is true, im hiding everything by playing the 2 animation functions made for it.
           * I adjust my className to play my css animation on my little arrow.
           * Else : I show everything by playing those 2 functions made to show the content. I also adjut classNames
           */
        }}
      >
        <img
          src={image}
          alt="icon de cadenas"
          className={`${classname}__button__image`}
        />
        <div>
          <h3 className={`${classname}__button__title`}>{title}</h3>

          <div className={`${classname}__button__description`}>
            {description}
          </div>
        </div>
      </button>
      <div
        className={`${classname}__content ${isOpen ? "displayed" : "hidden"}`}
      >
        <div ref={contentRef}>
          {/* Je rajoute une div ici car ma propriete height:0px ne prend pas en compte mon padding */}
          {dropdownChildrenProps?.map((element) => {
            return (
              <Dropdowncontent title={element.title} image={element.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

import React, { useRef } from "react";

export interface myItemcardProps {
  image: string;
  title: string;
  alt: string;
  key: number;
  classname: string;
}

function Itemcard({ image, title, alt, classname }: myItemcardProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      window.confirm("Tu es sur de vouloir supprimer cet element ?") &&
      contentRef
    ) {
      console.log(contentRef.current);
      contentRef.current?.remove();
    }
    // event.currentTarget fait référence à l'élément sur lequel l'écouteur d'événements est attaché.
  };

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${classname}__card`} ref={contentRef}>
      <img className={`${classname}__card__image`} src={image} alt={alt} />
      <h2 className={`${classname}__card__title`}>{title}</h2>
      <button onClick={handleClick} className={`${classname}__card__button`}>
        Supprimer
      </button>
    </div>
  );
}

export default Itemcard;

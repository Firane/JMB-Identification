import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faS,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faS, faChevronLeft, faChevronRight);

export interface CarrouselProps {
  carrouselData: {
    description: string;
    image: string;
  }[];
  classstring: string;
}

const Carrousel: React.FC<CarrouselProps> = ({
  carrouselData,
  classstring,
}) => {
  const [margin, setMargin] = useState<number>(0);
  return (
    <div className={`${classstring}__carrousel`}>
      <button type="button" className={`${classstring}__carrousel__left-arrow`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className={`${classstring}__carrousel__cells`}
        // style={{ margin-left : `${margin} + 'px'` }}
        // je pourrai peut etre faire un etat allant de 0 a array.lenght, faire un calcule margin x etat.
      >
        {carrouselData.map((item, index) => (
          <div className={`${classstring}__carrousel__cells__unit`} key={index}>
            <div className={`${classstring}__carrousel__cells__unit__title`}>
              {item.description}
            </div>
            <img
              className={`${classstring}__carrousel__cells__unit__image`}
              src={item.image}
              alt="illustration"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`${classstring}__carrousel__right-arrow`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carrousel;

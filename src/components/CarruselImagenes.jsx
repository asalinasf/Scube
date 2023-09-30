import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "./css/carousel.module.css";

const CarruselImagenes = ({ imagen1, imagen2, imagen3, imagen4 }) => {
  return (
    <Carousel className={styles.carousel}>
      <div>
        <img src={imagen1} alt="Imagen1" />
      </div>
      <div>
        <img src={imagen2} alt="Imagen2" />
      </div>
      <div>
        <img src={imagen3} alt="Imagen2" />
      </div>
      <div>
        <img src={imagen4} alt="Imagen2" />
      </div>
    </Carousel>
  );
};

export default CarruselImagenes;

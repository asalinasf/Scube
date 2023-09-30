import { useEffect, useState } from "react";

import CarruselImagenes from "../components/CarruselImagenes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./css/landingPage.module.css";
import CardCube from "../components/CardCube";
import SectionImg from "../components/SectionImg";

// Imagenes Carrusel
import imagen1 from "../assets/img/carousel1.webp";
import imagen2 from "../assets/img/carousel2.webp";
import imagen3 from "../assets/img/carousel3.webp";
import imagen4 from "../assets/img/carousel4.webp";

import { cubos } from "../db/cubos";

const LandingPage = () => {
  const [tipoCubos, setTipoCubos] = useState([]);
  const [cubosNuevos, setCubosNuevos] = useState([]);

  // Funcion para llamar a los tipos de cubos
  function handleClick(e) {
    e.preventDefault;
    const valor = e.target.value;
    // Crear una copia del Array
    const newCubos = [...cubos];
    // Filtrar la copia del Array
    const cubosFiltrados = newCubos.filter((cubo) => cubo.tipo === valor);
    // Pasar los cubos filtrados al estado
    setTipoCubos(cubosFiltrados);
  }

  // Encontrar cubos nuevos
  useEffect(() => {
    function encontrarCubosNuevos() {
      const cubosNuevos = [...cubos];
      const encontrarCubos = cubosNuevos.filter((cubo) => cubo.nuevo === true);
      setCubosNuevos(encontrarCubos);
    }
    encontrarCubosNuevos();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <CarruselImagenes
          imagen1={imagen1}
          imagen2={imagen2}
          imagen3={imagen3}
          imagen4={imagen4}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Recomendados</h2>
        <div className={styles.buttonsContainer}>
          <button value="2x2" onClick={handleClick}>
            2x2
          </button>
          <button value="3x3" onClick={handleClick}>
            3x3
          </button>
          <button value="4x4" onClick={handleClick}>
            4x4
          </button>
        </div>
        <div className={styles.CardCubeContainer}>
          {tipoCubos.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              id={cubo.id}
              precio={cubo.precio}
            />
          ))}
        </div>
      </div>
      <SectionImg />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Nuevos</h2>
        <div className={styles.CardCubeContainer}>
          {cubosNuevos.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

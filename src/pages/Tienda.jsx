import { useEffect, useState } from "react";
import { cubos } from "../db/cubos";
import CardCube from "../components/CardCube";
import CarruselImagenes from "../components/CarruselImagenes";

import imagen1 from "../assets/img/carousel5.webp";
import imagen2 from "../assets/img/carousel6.webp";
import imagen3 from "../assets/img/carousel7.webp";
import imagen4 from "../assets/img/carousel8.webp";

import styles from "./css/tienda.module.css";

const Tienda = () => {
  const [cubos2x2, setCubos2x2] = useState([]);
  const [cubos3x3, setCubos3x3] = useState([]);
  const [cubos4x4, setCubos4x4] = useState([]);
  const [cubos5x5, setCubos5x5] = useState([]);
  const [cubos6x6, setCubos6x6] = useState([]);
  const [cubos7x7, setCubos7x7] = useState([]);
  const [pyraminx, setPyraminx] = useState([]);
  const [megaminx, setMegaminx] = useState([]);
  const [skewb, setSkewb] = useState([]);
  const [sq_1, setSq_1] = useState([]);

  useEffect(() => {
    // Funcion para filtrar cubos 2x2
    function filtrarCubos2x2() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "2x2");
      setCubos2x2(cubosFiltrados);
    }
    filtrarCubos2x2();

    // Funcion para filtrar cubos 3x3
    function filtrarCubos3x3() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "3x3");
      setCubos3x3(cubosFiltrados);
    }
    filtrarCubos3x3();

    // Funcion para filtrar cubos 4x4
    function filtrarCubos4x4() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "4x4");
      setCubos4x4(cubosFiltrados);
    }
    filtrarCubos4x4();

    // Funcion para filtrar cubos 5x5
    function filtrarCubos5x5() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "5x5");
      setCubos5x5(cubosFiltrados);
    }
    filtrarCubos5x5();

    // Funcion para filtrar cubos 6x6
    function filtrarCubos6x6() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "6x6");
      setCubos6x6(cubosFiltrados);
    }
    filtrarCubos6x6();

    // Funcion para filtrar cubos 7x7
    function filtrarCubos7x7() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "7x7");
      setCubos7x7(cubosFiltrados);
    }
    filtrarCubos7x7();

    // Filtrar pyramix
    function filtrarPyraminx() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter(
        (cubo) => cubo.type === "pyraminx"
      );
      setPyraminx(cubosFiltrados);
    }
    filtrarPyraminx();

    // Filtrar Megaminx
    function filtrarMegaminx() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter(
        (cubo) => cubo.type === "megaminx"
      );
      setMegaminx(cubosFiltrados);
    }
    filtrarMegaminx();

    // Filtrar Skewb
    function filtrarSkewb() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === "skewb");
      setSkewb(cubosFiltrados);
    }
    filtrarSkewb();

    // Filtrar cubos SQ-1
    function filtrarSq_1() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter(
        (cubo) => cubo.type === "square-1"
      );
      setSq_1(cubosFiltrados);
    }
    filtrarSq_1();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Todos los cubos a tu disposicion</h1>

      <div>
        <h3 className={styles.subtitle1}>Cubos 2x2</h3>
        <div className={styles.CardCubeContainer}>
          {cubos2x2.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos 3x3</h3>
        <div className={styles.CardCubeContainer}>
          {cubos3x3.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos 4x4</h3>
        <div className={styles.CardCubeContainer}>
          {cubos4x4.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <div className={styles.containerCarousel}>
          <CarruselImagenes
            imagen1={imagen1}
            imagen2={imagen2}
            imagen3={imagen3}
            imagen4={imagen4}
          />
        </div>
        <h3 className={styles.subtitle}>Cubos 5x5</h3>
        <div className={styles.CardCubeContainer}>
          {cubos5x5.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos 6x6</h3>
        <div className={styles.CardCubeContainer}>
          {cubos6x6.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos 7x7</h3>
        <div className={styles.CardCubeContainer}>
          {cubos7x7.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Pyraminx</h3>
        <div className={styles.CardCubeContainer}>
          {pyraminx.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Megaminx</h3>
        <div className={styles.CardCubeContainer}>
          {megaminx.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos Skewb</h3>
        <div className={styles.CardCubeContainer}>
          {skewb.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              nombre={cubo.nombre}
              precio={cubo.precio}
              id={cubo.id}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Cubos Square-1</h3>
        <div className={styles.CardCubeContainer}>
          {sq_1.map((cubo) => (
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
    </main>
  );
};

export default Tienda;

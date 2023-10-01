import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cubos } from "../db/cubos";
import styles from "./css/cubodetails.module.css";
import Disqus from "../components/Disqus";

import CardCube from "../components/CardCube";

const CuboDetails = () => {
  const params = useParams();
  const [cubo, setCubo] = useState({
    imagen: "",
    nombre: "",
    precio: "",
  });
  const [cubosRecomendados, setCubosRecomendados] = useState([]);

  let { cuboId } = params;

  useEffect(() => {
    function encontrarCuboPorId() {
      const newCubos = [...cubos];
      const cuboEncontrado = newCubos.find((cube) => cube.id === cuboId);
      console.log(cuboEncontrado);
      setCubo(cuboEncontrado);
    }
    encontrarCuboPorId();
  }, [cuboId]);
  useEffect(() => {
    function encontrarCubosRecomendado() {
      const newCubos = [...cubos];
      const cubosEncontrados = newCubos.filter((cube) => cube.nuevo === true);
      setCubosRecomendados(cubosEncontrados);
    }
    encontrarCubosRecomendado();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.containerProduct}>
        <div className={styles.containerImg}>
          <img src={cubo.imagen} alt="cubo imagen" className={styles.img} />
        </div>
        <div className={styles.containerText}>
          <h4 className={styles.nombre}>{cubo.nombre}</h4>
          <p className={styles.precio}>
            <span className={styles.dollar}>$</span>
            {cubo.precio}
          </p>
          <button className={styles.btn}>Agregar</button>
        </div>
      </div>
      <h3 className={styles.recomendados}>Recomendados</h3>
      <div className={styles.CardCubeContainer}>
        {cubosRecomendados.map((cubo) => (
          <CardCube
            key={cubo.id}
            nombre={cubo.nombre}
            img={cubo.imagen}
            id={cubo.id}
          />
        ))}
      </div>
      <Disqus />
    </main>
  );
};

export default CuboDetails;

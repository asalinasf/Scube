import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cubos } from "../db/cubos";
import styles from "./css/tipocubo.module.css";
import CardCube from "../components/CardCube";

const TipoCubos = () => {
  const [tipoCubos, setTipoCubos] = useState([]);
  const [cubosRecomendados, setCubosRecomendados] = useState([]);

  const params = useParams();

  const { tipoCubo } = params;

  useEffect(() => {
    // Filtrar cubos
    function filtrarCubos() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.type === tipoCubo);
      setTipoCubos(cubosFiltrados);
    }
    filtrarCubos();

    // Filtrar cubos recomendados
    function filtrarCubosRecomendados() {
      const newCubos = [...cubos];
      const cubosFiltrados = newCubos.filter((cubo) => cubo.nuevo === true);
      setCubosRecomendados(cubosFiltrados);
    }
    filtrarCubosRecomendados();
  }, [tipoCubo]);

  return (
    <main className={styles.container}>
      <div className={styles.containerSection}>
        <h1 className={styles.title}>Cubos {tipoCubo}</h1>
        <div className={styles.CardCubeContainer}>
          {tipoCubos.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              precio={cubo.precio}
              id={cubo.id}
              nombre={cubo.nombre}
            />
          ))}
        </div>
        <h1 className={styles.title2}>Cubos Recomendados</h1>
        <div className={styles.CardCubeContainer}>
          {cubosRecomendados.map((cubo) => (
            <CardCube
              key={cubo.id}
              img={cubo.imagen}
              precio={cubo.precio}
              id={cubo.id}
              nombre={cubo.nombre}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TipoCubos;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cubos } from "../db/cubos";
import styles from "./css/tipocubo.module.css";
import CardCube from "../components/CardCube";

const TipoCubos = () => {
  const [tipoCubos, setTipoCubos] = useState([]);
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
  }, [tipoCubo]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Cubos {tipoCubo}</h1>
      <div className={styles.containerSection}>
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
      </div>
    </main>
  );
};

export default TipoCubos;

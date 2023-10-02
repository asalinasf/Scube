import { useState } from "react";
import fondo from "../assets/img/algoritmos/fondo.webp";
import styles from "./css/algoritmos.module.css";

import { algoritmos } from "../db/algoritmos";

const Algoritmos = () => {
  const [alg, setAlg] = useState([]);

  function handleClick(e) {
    e.preventDefault;
    // Obtener valor de el boton
    const valor = e.target.value;
    // Crear copia del array
    const newArrayAlgs = [...algoritmos];

    // Filtrar los algoritmos del mismo tipo
    const arrayFinalCubos = newArrayAlgs.filter((alg) => alg.tipo === valor);

    // Pasar los algoritmos filtrados al esta
    setAlg(arrayFinalCubos);
  }

  return (
    <main className={styles.container}>
      <div className={styles.alg}>
        <img src={fondo} alt="fondo cubo" className={styles.img1} />
        <div className={styles.containerText}>
          <h1 className={styles.title}>¿Qué es un algoritmo en los cubos?</h1>
          <p className={styles.text}>
            Los algoritmos del cubo Rubik son una serie de nomenclaturas que
            determinar los pasos a seguir para descifrar cómo armar el cubo de
            Rubik. Letra= Girar lado 90 grados. Dirección manecillas del reloj.
            Letra con apostrofe= Girar lado 90 grados en contra de las
            manecillas del reloj.
          </p>
        </div>
      </div>
      <div className={styles.learnAlg}>
        <div>
          <h2 className={styles.subtitle}>Aprende Algoritmos aquí</h2>
        </div>
        <div className={styles.links}>
          <button className={styles.link} value={"f2l"} onClick={handleClick}>
            F2L
          </button>
          <button className={styles.link} value={"oll"} onClick={handleClick}>
            OLL
          </button>
          <button className={styles.link} value={"pll"} onClick={handleClick}>
            PLL
          </button>
          <button className={styles.link} value={"novia"} onClick={handleClick}>
            Caso novia
          </button>
        </div>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Caso</th>
            <th>Imagen</th>
            <th>Algoritmo</th>
          </tr>
          {alg.map((algoritmo) => (
            <tr key={algoritmo.id} className={styles.tr}>
              <td>{algoritmo.caso}</td>
              <td>
                <img
                  src={algoritmo.imagen}
                  alt="Imagen"
                  className={styles.img}
                />
              </td>
              <td>{algoritmo.algoritmo}</td>
            </tr>
          ))}
        </table>
      </div>
    </main>
  );
};

export default Algoritmos;

import { useParams } from "react-router-dom";

import { noticias } from "../db/noticias";
import { useEffect, useState } from "react";

import styles from "./css/noticiaDetails.module.css";
import Disqus from "../components/Disqus";

import { AiOutlineArrowLeft } from "react-icons/ai";

const NoticiaDetails = () => {
  const [noticia, setNoticia] = useState({
    titulo: "",
    informacion: "",
    imagen: "",
  });

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // Funcion encontrar noticia
    function encontrarNoticia() {
      const newNoticia = [...noticias];
      const encontrarNew = newNoticia.find((newNew) => newNew.id === id);
      setNoticia(encontrarNew);
    }
    encontrarNoticia();
  }, [id]);

  return (
    <main className={styles.container}>
      <a href="/noticias" className={styles.arrowLink}>
        <AiOutlineArrowLeft className={styles.arrow} />
        <p className={styles.text}>volver</p>
      </a>
      <h1 className={styles.title}>{noticia.titulo}</h1>
      <div className={styles.containerInfo}>
        <img
          src={noticia.imagen}
          alt="Noticia imagen"
          className={styles.img}
          width={700}
        />
        <p className={styles.info}>{noticia.informacion}</p>
      </div>
      <Disqus />
    </main>
  );
};

export default NoticiaDetails;

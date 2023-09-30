import { useState } from "react";
import { noticias } from "../db/noticias";

import CardNews from "../components/CardNews";
import styles from "./css/noticias.module.css";

const Noticias = () => {
  const [news, setNews] = useState([...noticias]);

  console.log(news);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Noticias</h1>
      <div className={styles.CardContainer}>
        {news.map((noticia) => (
          <CardNews
            key={noticia.id}
            titulo={noticia.titulo}
            imagen={noticia.imagen}
            id={noticia.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Noticias;

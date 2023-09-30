import styles from "./css/cardNews.module.css";

const CardNews = ({ titulo, imagen, id }) => {
  return (
    <a href={`/noticias/${id}`} className={styles.link}>
      <img
        src={imagen}
        alt="imagen noticia"
        width={500}
        className={styles.img}
      />
      <p className={styles.title}>{titulo}</p>
    </a>
  );
};

export default CardNews;

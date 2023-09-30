import styles from "./css/cardCube.module.css";
const CardCube = ({ img, nombre, id, precio }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={img} alt={`imagen ${nombre}`} width={200} height={100} />
      </div>
      <div className={styles.containerText}>
        <a href={`/tienda/cubos/${id}`} className={styles.link}>
          <p className={styles.nombre}>{nombre}</p>
        </a>
        <p className={styles.precio}>
          <span className={styles.dollar}>$</span>
          {precio}
        </p>
        <a className={styles.btn} href={`/tienda/cubos/${id}`}>
          agregar
        </a>
      </div>
    </div>
  );
};

export default CardCube;

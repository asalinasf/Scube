import styles from "./css/cardCube.module.css";
const CardCube = ({ img, nombre }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={img} alt={`imagen ${nombre}`} width={200} height={100} />
      </div>
      <div className={styles.containerText}>
        <a href="#" className={styles.link}>
          <p className={styles.nombre}>{nombre}</p>
        </a>
        <button className={styles.btn}>agregar</button>
      </div>
    </div>
  );
};

export default CardCube;

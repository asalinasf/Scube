import styles from "./css/navbarbarradesplegable.module.css";

const NavbarBarrDesplegable = () => {
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerLinks}>
        <a href="/" className={styles.cuboLink}>
          2x2
        </a>
        <a href="/" className={styles.cuboLink}>
          3x3
        </a>
        <a href="/" className={styles.cuboLink}>
          4x4
        </a>
        <a href="/" className={styles.cuboLink}>
          5x5
        </a>
        <a href="/" className={styles.cuboLink}>
          6x6
        </a>
        <a href="/" className={styles.cuboLink}>
          7x7
        </a>
      </div>
    </div>
  );
};

export default NavbarBarrDesplegable;

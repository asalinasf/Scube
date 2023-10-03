import styles from "./css/newnavbar.module.css";

const NewNavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logo}>
          Scubeshop
        </a>
      </div>
      <div className={styles.navBarContainer}>
        <div className={styles.navbar}>
          <ul className={styles.nav}>
            <li className={styles.dropdown}>
              <a href="/algoritmos" className={styles.a}>
                Algoritmos
              </a>
            </li>
            <li className={styles.dropdown}>
              <a href="/tienda" className={styles.a}>
                Tienda
              </a>
              <ul>
                <li>
                  <a href="/">2x2</a>
                </li>
                <li>
                  <a href="/">3x3</a>
                </li>
                <li>
                  <a href="/">4x4</a>
                </li>
                <li>
                  <a href="/">5x5</a>
                </li>
                <li>
                  <a href="/">6x6</a>
                </li>
                <li>
                  <a href="/">7x7</a>
                </li>
              </ul>
            </li>
            <li className={styles.link}>
              <a href="/noticias" className={styles.a}>
                Noticias
              </a>
            </li>
            <li className={styles.link}>
              <a href="/contactanos" className={styles.a}>
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewNavBar;

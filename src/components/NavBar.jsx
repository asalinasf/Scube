import styles from "./css/navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logo}>
            Scubeshop
          </a>
        </div>
        <ul className={styles.list}>
          <li className={styles.link}>
            <a href="/algoritmos" className={styles.a}>
              Algoritmos
            </a>
          </li>
          <div>
            <li className={styles.link}>
              <a href="/tienda" className={styles.a}>
                Tienda
              </a>
            </li>
          </div>
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
  );
};

export default NavBar;

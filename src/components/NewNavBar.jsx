import styles from "./css/newnavbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
              <a href="/tienda" className={styles.tienda}>
                Tienda
              </a>
              <button className={styles.btn}>Tienda</button>
              <ul>
                <li>
                  <a href="/tienda/cubos/tipo/2x2">2x2</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/3x3">3x3</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/4x4">4x4</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/5x5">5x5</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/6x6">6x6</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/7x7">7x7</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/pyraminx">Pyraminx</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/megaminx">Megaminx</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/skewb">Skewb</a>
                </li>
                <li>
                  <a href="/tienda/cubos/tipo/square-1">Square-1</a>
                </li>
                <li>
                  <a href="/tienda">View All</a>
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

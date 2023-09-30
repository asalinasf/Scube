import styles from "./css/navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
            <a href="/tienda">Tienda</a>
          </li>

          <li className={styles.link}>
            <a href="/algoritmos">Algoritmos</a>
          </li>

          <li className={styles.link}>
            <a href="/noticias">Noticias</a>
          </li>
          <li className={styles.link}>
            <a href="/contactanos">Contactanos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

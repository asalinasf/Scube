import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsTwitch, BsDiscord } from "react-icons/bs";
import styles from "./css/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h3 className={styles.subtitle}>Dejanos ayudarte</h3>
          <a href="/contactanos" className={styles.link}>
            Contactanos
          </a>
        </div>
        <div className={styles.containerText}>
          <h3 className={styles.subtitle}>Informacion</h3>
          <a href="/algoritmos" className={styles.link}>
            Algoritmos
          </a>
          <a href="/tienda" className={styles.link}>
            Tienda
          </a>
        </div>
        <div className={styles.containerText}>
          <h3 className={styles.subtitle}>Siguenos</h3>
          <a href="#" className={styles.social}>
            <AiFillYoutube className={styles.logo} />
          </a>
          <a href="#" className={styles.social}>
            <AiFillFacebook className={styles.logo} />
          </a>
          <a href="#" className={styles.social}>
            <BsTwitch className={styles.logo} />
          </a>
          <a href="#" className={styles.social}>
            <AiFillInstagram className={styles.logo} />
          </a>
          <a href="#" className={styles.social}>
            <BsDiscord className={styles.logo} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.text}>© 2023 Scubeshop El primo del amigo</p>
      </div>
    </footer>
  );
};

export default Footer;

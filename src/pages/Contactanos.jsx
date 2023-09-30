import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import styles from "./css/contactanos.module.css";
const Contactanos = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contactanos</h1>
      <div className={styles.container}>
        <div className={styles.socialContainer}>
          <AiOutlineWhatsApp className={styles.social1} />
          <h3 className={styles.subtitle}>Whatsappp</h3>
          <button className={styles.btn}>+2 441 0 1236</button>
        </div>
        <div className={styles.socialContainer}>
          <AiOutlineMail className={styles.social} />
          <h3 className={styles.subtitle}>Email</h3>
          <button className={styles.btn}>scubeoficial@gmail.com</button>
        </div>
      </div>
    </main>
  );
};

export default Contactanos;

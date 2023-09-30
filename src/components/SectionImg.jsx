import img1 from "../assets/img/sectionImg/1.jpg";
import img2 from "../assets/img/sectionImg/2.webp";
import styles from "./css/sectionimg.module.css";

const SectionImg = () => {
  return (
    <section className={styles.sectionImg}>
      <div className={styles.container1}>
        <div className={styles.text}>
          <h2 className={styles.title}>WR 3.13 Single Max Park</h2>
          <a
            href="https://www.youtube.com/watch?v=gh8HX4itF_w"
            target="_blanc"
            className={styles.link}
          >
            Ver video
          </a>
        </div>
        <div className={styles.containerImg}>
          <img src={img1} alt="Max park" width={500} className={styles.img} />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.containerImg}>
          <img src={img2} alt="Cubo rubik" width={500} className={styles.img} />
        </div>
        <h2 className={styles.title}>Elige tu cubo perfecto</h2>
      </div>
    </section>
  );
};

export default SectionImg;

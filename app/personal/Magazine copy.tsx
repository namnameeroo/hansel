import Image from "next/image";
import styles from "./Magazine.module.css";
export default function Magazine() {
  const images = [
    "https://picsum.photos/418/620",
    "https://picsum.photos/347/509",
    "https://picsum.photos/418/620",
    "https://picsum.photos/347/509",
  ];
  return (
    <div className={`${styles.layoutBox}`}>
      <div className={`${styles.versionA} ${styles.container}`}>
        <div className={`${styles.imageGrid3M4} ${styles.grid}`}>
          <Image
            src={images[0]}
            alt="personal"
            width={418}
            height={620}
            className={`${styles.img} ${styles.image0} ${styles.left}`}
          />

          <Image
            src={images[1]}
            alt="personal"
            width={418}
            height={620}
            className={`${styles.img} ${styles.image1} ${styles.center}`}
          />

          <Image
            src={images[2]}
            alt="personal"
            width={418}
            height={620}
            className={`${styles.img} ${styles.image2} ${styles.right}`}
          />
          <Image
            src={images[3]}
            alt="personal"
            width={418}
            height={620}
            className={`${styles.img} ${styles.image3} ${styles.right}`}
          />
        </div>
      </div>
    </div>
  );
}

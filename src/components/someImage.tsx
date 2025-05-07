import React from "react";
import Image from "next/image";
import styles from "./someImage.module.css";

export const SomeImage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://cs3.wettercomassets.com/images/interview/hafen.jpg"
          alt="hafen image"
          fill
          priority
          quality={70}
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
    </div>
  );
};

import React from "react";
import styles from "./page.module.css";
import NextLink from "next/link";
import { SomeImage } from "@/components/someImage";

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SomeImage />
      <main className={styles.main}>
        <h1 className={styles.title}>wetter.com coding challenge</h1>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
        <NextLink href="/forecast" className={styles.link}>
          go to Forecast Page
        </NextLink>
      </main>
    </div>
  );
};

export default HomePage;

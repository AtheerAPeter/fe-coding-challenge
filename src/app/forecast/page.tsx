import React from "react";
import styles from "./forecast.module.css";
import NextLink from "next/link";

const ForecastPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <NextLink href="/" className={styles.backButton}>
          ← Back to Home
        </NextLink>
        <h1 className={styles.title}>Forecast Page</h1>
        <div className={styles.options}>
          <NextLink
            href="/forecast/3-days/DE0001020.html"
            className={styles.optionButton}
          >
            Berlin 3 days forecast
          </NextLink>
          <NextLink
            href="/forecast/7-days/DE0001020.html"
            className={styles.optionButton}
          >
            Berlin 7 days forecast
          </NextLink>
        </div>
      </main>
    </div>
  );
};

export default ForecastPage;

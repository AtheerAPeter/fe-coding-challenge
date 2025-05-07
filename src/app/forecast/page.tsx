import React from "react";
import styles from "./forecast.module.css";
import NextLink from "next/link";

const ForecastPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <h1>Forecast Page</h1>
        <div className={styles.links}>
          <NextLink href="/">go to Home Page</NextLink>
          <NextLink href="/forecast/3-days/DE0001020.html">
            Berlin 3 days forecast
          </NextLink>
          <NextLink href="/forecast/7-days/DE0001020.html">
            Berlin 7 days forecast
          </NextLink>
        </div>
      </main>
    </div>
  );
};

export default ForecastPage;

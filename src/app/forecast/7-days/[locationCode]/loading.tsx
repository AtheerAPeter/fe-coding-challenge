import styles from "../../forecast.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
}

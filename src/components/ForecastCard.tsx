import React from "react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { ForecastSummary, ForecastSpace } from "@/app/types/forecast";
import styles from "./ForecastCard.module.css";
import Accordion from "./Accordion";
import Image from "next/image";

interface ForecastCardProps {
  summary: ForecastSummary;
  spaces: Array<ForecastSpace>;
  className?: string;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({
  summary,
  spaces,
}) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return format(date, "EEEE, d. MMMM", { locale: de });
  };

  return (
    <article
      className={styles.forecastCard}
      aria-label={`Weather forecast for ${formatDate(summary.date)}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.date}>{formatDate(summary.date)}</div>
        <div className={styles.summaryRow}>
          <div>
            <div
              className={styles.weatherIcon}
              role="img"
              aria-label={summary.weather.text || "Weather condition"}
            >
              {summary.weather.iconUrl && (
                <Image
                  src={summary.weather.iconUrl}
                  alt={summary.weather.text || "Weather condition"}
                  width={48}
                  height={48}
                />
              )}
            </div>
            <div className={styles.weatherText}>
              {summary.weather.text || "Keine Daten"}
            </div>
          </div>
          <div
            className={styles.tempRange}
            aria-label={`Temperature range: ${summary.temperature.min}° to ${summary.temperature.max}°`}
          >
            <span className={styles.maxTemp}>
              {summary.temperature.max !== null
                ? `${summary.temperature.max}°`
                : "-"}
            </span>
            {" / "}
            <span className={styles.minTemp}>
              {summary.temperature.min !== null
                ? `${summary.temperature.min}°`
                : "-"}
            </span>
          </div>
        </div>
      </div>

      <Accordion
        title="Forecast Details"
        className={styles.forecastAccordion}
        defaultOpen={false}
      >
        <div className={styles.timeBlocks} role="list">
          {spaces.map((space, spaceIndex) => {
            return (
              <div
                key={spaceIndex}
                className={styles.timeBlock}
                role="listitem"
              >
                <div className={styles.timeLabel}>
                  {space.typeLabel}
                  {space.from && (
                    <div className={styles.timeValue}>
                      {format(new Date(space.from), "HH:mm", { locale: de })}
                    </div>
                  )}
                </div>
                <div className={styles.timeWeather}>
                  <span
                    className={styles.timeEmoji}
                    role="img"
                    aria-label={space.weather.text || "Weather condition"}
                  >
                    {space.weather.iconUrl && (
                      <Image
                        src={space.weather.iconUrl}
                        alt={space.weather.text || "Weather condition"}
                        width={32}
                        height={32}
                      />
                    )}
                  </span>
                  <span>{space.weather.text || "Keine Daten"}</span>
                </div>
                <div
                  className={styles.timeTemp}
                  aria-label={`Temperature: ${space.temperature.max}°`}
                >
                  {space.temperature.max !== null
                    ? `${space.temperature.max}°`
                    : "-"}
                </div>
              </div>
            );
          })}
        </div>
      </Accordion>
    </article>
  );
};

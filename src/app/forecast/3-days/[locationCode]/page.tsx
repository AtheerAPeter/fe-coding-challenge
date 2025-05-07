import { HttpClient } from "@/lib/httpClient";
import React from "react";
import styles from "../../forecast.module.css";
import { ForecastCard } from "@/components/ForecastCard";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locationCode: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locationCode } = await params;

  return {
    title: `3-Tage-Wettervorhersage für ${locationCode}`,
    description: `Erhalten Sie Ihre detaillierte 3-Tage-Wettervorhersage für ${locationCode}. Bleiben Sie informiert über Temperatur, Niederschlag, Windbedingungen und mehr.`,
    keywords: `Wettervorhersage, ${locationCode} Wetter, 3-Tage-Vorhersage, Kurzfristwetter, meteorologische Daten`,
    openGraph: {
      title: `3-Tage-Wettervorhersage für ${locationCode}`,
      description: `Detaillierte 3-Tage-Wettervorhersage für ${locationCode}`,
      type: "website",
    },
  };
}

export default async function Page(props: Props) {
  const { locationCode } = await props.params;

  const location = await unstable_cache(
    async () => await HttpClient.WetterApi.locations(locationCode),
    ["location", locationCode],
    {
      revalidate: 60 * 60 * 24, // 1 day, location data is not expected to change
    }
  )();

  const forecast = await unstable_cache(
    async () => await HttpClient.WetterApi.forecast(location.coordinates),
    [
      "forecast",
      location.coordinates.latitude.toString(),
      location.coordinates.longitude.toString(),
    ],
    {
      revalidate: 60 * 5, // 5 minutes
    }
  )();

  // Limit to only 3 days
  const limitedForecast = {
    ...forecast,
    items: forecast.items.slice(0, 3),
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/forecast" className={styles.backButton}>
          ← Back
        </Link>
        <h1 className={styles.locationName}>{location.name}</h1>
        <p>3-Tage-Wettervorhersage</p>
      </header>

      <div className={styles.forecastGrid}>
        {limitedForecast.items.map((item, index) => (
          <ForecastCard
            key={index}
            summary={item.summary}
            spaces={item.spaces}
            className={styles.forecastCard}
          />
        ))}
      </div>
    </div>
  );
}

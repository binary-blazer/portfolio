"use client";

import React from "react";
import isNewYearsPeriod from "@/functions/isNewYearsPeriod";
import { config } from "@/main.config";
import Fireworks from "@fireworks-js/react";

const FireworksContext = React.createContext();

const safeStorage = {
  getItem: (key) => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(key);
  },
  setItem: (key, value) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  },
};

function useFireworksStorage(key, initialValue, parser = (v) => v) {
  const [value, setValue] = React.useState(() => {
    const stored = safeStorage.getItem(key);
    if (stored !== null) {
      return parser(stored);
    }
    safeStorage.setItem(key, String(initialValue));
    return initialValue;
  });

  React.useEffect(() => {
    const stored = safeStorage.getItem(key);
    if (stored) {
      setValue(parser(stored));
    } else {
      setValue(initialValue);
      safeStorage.setItem(key, initialValue);
    }
  }, []);

  React.useEffect(() => {
    const handleStorage = (e) => {
      const newValue = e.detail?.value || e.newValue;
      if ((e.key === key || e.detail?.key === key) && newValue !== null) {
        setValue(parser(newValue));
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(`fireworks-storage-${key}`, handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(`fireworks-storage-${key}`, handleStorage);
    };
  }, [key, parser]);

  const updateValue = React.useCallback(
    (newValue) => {
      setValue(newValue);
      localStorage.setItem(key, newValue);
      window.dispatchEvent(
        new CustomEvent(`fireworks-storage-${key}`, {
          detail: { key, value: newValue },
        }),
      );
    },
    [key],
  );

  return [value, updateValue];
}

export function resetFireworksSettings() {
  const defaults = {
    fireworksEnabled: String(config.fireworks.enabled),
    fireworksOpacity: String(config.fireworks.opacity),
    fireworksParticles: String(config.fireworks.particles),
    fireworksGravity: String(config.fireworks.gravity),
  };
  updateFireworksSettings(defaults);
}

export function updateFireworksSettings(settings) {
  Object.entries(settings).forEach(([key, value]) => {
    const sanitizedValue = String(value);
    safeStorage.setItem(key, sanitizedValue);
    window?.dispatchEvent(
      new CustomEvent(`fireworks-storage-${key}`, {
        detail: { key, value: sanitizedValue },
      }),
    );
  });
}

export function getFireworksSettings() {
  if (typeof window === "undefined") return config.fireworks; // Return defaults if server-side
  return {
    fireworksEnabled: safeStorage.getItem("fireworksEnabled") === "true",
    fireworksOpacity: Number.parseFloat(
      safeStorage.getItem("fireworksOpacity"),
    ),
    fireworksParticles: Number.parseInt(
      safeStorage.getItem("fireworksParticles"),
    ),
    fireworksGravity: Number.parseFloat(
      safeStorage.getItem("fireworksGravity"),
    ),
  };
}

export default function FireworksProvider({ children }) {
  const isNewYear = isNewYearsPeriod();

  const [fireworksEnabled, setFireworksEnabled] = useFireworksStorage(
    "fireworksEnabled",
    config.fireworks.enabled,
    (v) => v === "true",
  );

  const [fireworksOpacity, setFireworksOpacity] = useFireworksStorage(
    "fireworksOpacity",
    config.fireworks.opacity,
    Number.parseFloat,
  );

  const [fireworksParticles, setFireworksParticles] = useFireworksStorage(
    "fireworksParticles",
    config.fireworks.particles,
    Number.parseInt,
  );

  const [fireworksGravity, setFireworksGravity] = useFireworksStorage(
    "fireworksGravity",
    config.fireworks.gravity,
    Number.parseFloat,
  );

  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    if (!fireworksEnabled) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fireworksEnabled]);

  return (
    <FireworksContext.Provider
      value={{
        fireworksEnabled,
        setFireworksEnabled,
        fireworksOpacity,
        setFireworksOpacity,
        fireworksParticles,
        setFireworksParticles,
        fireworksGravity,
        setFireworksGravity,
        updateSettings: updateFireworksSettings,
        resetSettings: resetFireworksSettings,
      }}
    >
      {isNewYear &&
        config.fireworks.featureEnabled &&
        (fireworksEnabled || isTransitioning) && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 140,
              opacity: fireworksEnabled ? fireworksOpacity : 0,
              transition: "opacity 1s ease-out",
            }}
          >
            <Fireworks
              style={{
                width: "100%",
                height: "100%",
              }}
              options={{
                opacity: fireworksOpacity,
                particles: fireworksParticles,
                gravity: fireworksGravity,
                explosion: 5,
                trace: 3,
                acceleration: 1.05,
              }}
            />
          </div>
        )}
      {children}
    </FireworksContext.Provider>
  );
}

export const useFireworks = () => React.useContext(FireworksContext);

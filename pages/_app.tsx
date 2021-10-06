import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

type StyleTheme = {
  color: {
    primary: string;
    secondary: string;
    contrast: string;
  };
};

const regularTheme: StyleTheme = {
  color: {
    contrast: "white",
    primary: "purple",
    secondary: "aqua",
  },
};

const blackFridayTheme: StyleTheme = {
  color: {
    contrast: "white",
    primary: "black",
    secondary: "red",
  },
};

const spooktoberTheme: StyleTheme = {
  color: {
    contrast: "white",
    primary: "#E57C2F",
    secondary: "#2C2B2B",
  },
};

const setTheme = (theme: StyleTheme) => {
  document.documentElement.style.setProperty(
    "--color-contrast",
    theme.color.contrast
  );
  document.documentElement.style.setProperty(
    "--color-primary",
    theme.color.primary
  );
  document.documentElement.style.setProperty(
    "--color-secondary",
    theme.color.secondary
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTheme(regularTheme);
    // document.documentElement.style.setProperty("--color-secondary", "red");
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;

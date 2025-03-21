import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
      >
        {theme === "dark" ? "라이트모드" : "다크모드"}
      </button>
      <Component {...pageProps} />
    </>
  );
}

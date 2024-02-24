import { theme } from "@/lib/theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/global/theme";
import { Reset } from "@/styles/global/reset";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

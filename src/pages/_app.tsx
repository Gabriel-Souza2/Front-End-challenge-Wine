import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/global/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

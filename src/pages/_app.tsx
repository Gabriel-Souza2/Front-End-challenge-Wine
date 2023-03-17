import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/global/theme";
import { Reset } from "@/styles/global/reset";
import { Menu } from "@/components/Menu";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu />
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

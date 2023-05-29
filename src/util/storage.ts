import nookies, { parseCookies } from "nookies";
import { CART } from "./card";

export function saveStorage(key: string, value: any): void {
  const parsed = JSON.stringify(value);
  nookies.set(null, key, parsed, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
}

export function getStorage(key: string): any {
  const cookies = nookies.get();
  if (cookies[CART]) {
    return JSON.parse(cookies[key]);
  }

  return [];
}

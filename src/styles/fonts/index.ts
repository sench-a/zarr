import localFont from "next/font/local";

export const soehne = localFont({
  src: [
    { path: "./soehne/thin.woff2", weight: "200" },
    { path: "./soehne/light.woff2", weight: "300" },
    { path: "./soehne/regular.woff2", weight: "400" },
    { path: "./soehne/medium.woff2", weight: "500" },
    { path: "./soehne/semibold.woff2", weight: "600" },
    { path: "./soehne/bold.woff2", weight: "700" },
    { path: "./soehne/extrabold.woff2", weight: "800" },
    { path: "./soehne/black.woff2", weight: "900" },
  ],
  display: "swap",
});

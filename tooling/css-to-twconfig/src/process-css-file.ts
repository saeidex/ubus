import * as fs from "node:fs";

import { rgbToHsl } from "./rgb-to-hsl";

export const processCssFile = (inputPath: string, outputPath: string) => {
  const cssContent = fs.readFileSync(inputPath, "utf-8");
  const rgbRegex = /rgb\(\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(\d+)\s*\)/g;

  const newCssContent = cssContent.replace(
    rgbRegex,
    (_, r: string, g: string, b: string) => {
      const HSL = rgbToHsl(parseInt(r), parseInt(g), parseInt(b));
      return `${HSL.h} ${HSL.s}% ${HSL.l}%`;
    },
  );

  fs.writeFileSync(outputPath, newCssContent, "utf-8");
  console.log(`HSL converted CSS file saved to ${outputPath}`);
};

import path from "node:path";

import { processCssFile } from "./process-css-file";

const inputFile = path.join(__dirname, "../colors.css");
const outputFile = path.join(__dirname, "../colors-hsl.css");

processCssFile(inputFile, outputFile);

/**
 * TODO:
 * i. collect color variable names from a css files
 * ii. breakdown variables on hyphens and generate the color object
       like `colors: {
              primary: {
                DEFAULT: "hsl(var(--md-sys-color-primary))",
                container: "hsl(var(--md-sys-color-primary-container))",
                fixed: {
                  DEFAULT: "hsl(var(--md-sys-color-primary-fixed))",
                  dim: "hsl(var(--md-sys-color-primary-fixed-dim))",
                },
              },
            }`
 * iii. insert the object into the config file
 * iv. show different before insert
 * 
 * v. optional:
 * add support for other color types (hex, hsv..)
 */

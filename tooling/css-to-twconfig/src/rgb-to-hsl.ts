export const rgbToHsl = (r: number, g: number, b: number) => {
  let h = 0;
  let s = 0;

  const rgb: [number, number, number] = [r / 255, g / 255, b / 255];

  const min = Math.min(...rgb);
  const max = Math.max(...rgb);

  const l = (min + max) / 2;

  if (min !== max) {
    const delta = max - min;

    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case rgb[0]:
        h = (rgb[1] - rgb[2]) / delta + (rgb[1] < rgb[2] ? 6 : 0);
        break;
      case rgb[1]:
        h = (rgb[2] - rgb[0]) / delta + 2;
        break;
      case rgb[2]:
        h = (rgb[0] - rgb[1]) / delta + 4;
        break;
    }

    h *= 60;
  }

  return {
    h: h.toFixed(2),
    s: (s * 100).toFixed(2),
    l: (l * 100).toFixed(2),
  };
};

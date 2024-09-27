import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useThemeBasedValue = <T>(lightValue: T, darkValue: T): T => {
  const { theme, resolvedTheme } = useTheme();
  const [value, setValue] = useState(lightValue);

  useEffect(() => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setValue(darkValue);
    } else {
      setValue(lightValue);
    }
  }, [theme, resolvedTheme, lightValue, darkValue]);

  return value;
};

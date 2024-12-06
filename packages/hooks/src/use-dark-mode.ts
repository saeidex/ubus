import { useEffect, useState } from "react";

export const useDarkMode = (): boolean => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const root = document.documentElement;

  useEffect(() => {
    const checkDarkMode = () => {
      if (root.classList.contains("dark")) {
        setIsDark(true);
      } else {
        setIsDark(
          getComputedStyle(root).getPropertyValue("color-scheme").trim() ===
            "dark",
        );
      }
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
};

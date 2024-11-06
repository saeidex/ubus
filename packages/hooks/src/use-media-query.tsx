import { useEffect, useState } from "react";

/**
 * Track the state of a media query.
 *
 * @param query The media query string
 *              Example: "(max-width: 768px)" or "(prefers-color-scheme: dark)"
 * @returns {boolean} Returns `true` if matches condition, otherwise `false`.
 * @example
 * ```tsx
 * const isLargeScreen = useMediaQuery("(max-width: 768px)");
 * return <div>{isLargeScreen ? "Mobile View" : "Desktop View"}</div>;
 * ```
 */
export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};

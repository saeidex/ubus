/**
 * Converts a time duration in seconds into a formatted string representation in the format `HH:mm H`.
 *
 * @param {number} seconds - The total time duration in seconds.
 * @returns {string} The formatted time string in the form `HH:mm H`.
 *
 * @example
 * // Example 1: Large duration
 * const formatted1 = formatSecondsToHours(13480);
 * // Output: "03:44 H"
 *
 * @example
 * // Example 2: Small duration
 * const formatted2 = formatSecondsToHours(720);
 * // Output: "00:12 H"
 *
 * @example
 * // Example 3: No time (zero seconds)
 * const formatted3 = formatSecondsToHours(0);
 * // Output: "00:00 H"
 */
export const formatSecondsToHours = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600); // Convert to hours
  const minutes = Math.floor((seconds % 3600) / 60); // Get remaining minutes
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} H`;
};

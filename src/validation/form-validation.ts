/**
 * Is the value empty or not. Does trim() on the value first.
 * @param value The string value to check
 */
export const isEmpty = (value: string | undefined): boolean =>
  value?.trim() === "";

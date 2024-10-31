// Define a locale-aware word splitter to handle non-English characters
const splitWords = (str: string, locale: string) => str.match(/\p{L}+/gu) || [];

/**
 * Capitalizes the first letter of a word, using locale for proper casing.
 * @param {string} word - The word to capitalize.
 * @param {string} locale - The locale to use for capitalization.
 * @returns {string} The capitalized word.
 */
const capitalize = (word: string, locale: string): string => {
  return word.charAt(0).toLocaleUpperCase(locale) + word.slice(1).toLocaleLowerCase(locale);
};

/**
 * Converts a string to camelCase.
 * @param {string} str - The input string.
 * @param {string} [locale='en'] - The locale to use for lowercasing.
 * @returns {string} The camelCased string.
 */
export const toCamelCase = (str: string, locale: string = 'en'): string => {
  const words = splitWords(str, locale);
  return words
    .map((word, index) => (index === 0 ? word.toLocaleLowerCase(locale) : capitalize(word, locale)))
    .join('');
};

/**
 * Converts a string to PascalCase.
 * @param {string} str - The input string.
 * @param {string} [locale='en'] - The locale to use for capitalization.
 * @returns {string} The PascalCased string.
 */

export const toPascalCase = (str: string, locale: string = 'en'): string => {
  const words = splitWords(str, locale);
  return words.map(word => capitalize(word, locale)).join('');
};

/**
 * Converts a string to snake_case.
 * @param {string} str - The input string.
 * @param {string} [locale='en'] - The locale to use for lowercasing.
 * @returns {string} The snake_cased string.
 */
export const toSnakeCase = (str: string, locale: string = 'en'): string => {
  const words = splitWords(str, locale);
  return words.map(word => word.toLocaleLowerCase(locale)).join('_');
};

/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string.
 * @param {string} [locale='en'] - The locale to use for lowercasing.
 * @returns {string} The kebab-cased string.
 */
export const toKebabCase = (str: string, locale: string = 'en'): string => {
  const words = splitWords(str, locale);
  return words.map(word => word.toLocaleLowerCase(locale)).join('-');
};

/**
 * Converts a string to CONSTANT_CASE.
 * @param {string} str - The input string.
 * @param {string} [locale='en'] - The locale to use for uppercasing.
 * @returns {string} The CONSTANT_CASE string.
 */
export const toConstantCase = (str: string, locale: string = 'en'): string => {
  const words = splitWords(str, locale);
  return words.map(word => word.toLocaleUpperCase(locale)).join('_');
};

/**
 * Converts a string to a custom case based on the provided delimiter and capitalization preference.
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter to use between words (e.g., space, underscore).
 * @param {boolean} [capitalizeWords=false] - Whether to capitalize each word.
 * @param {string} [locale='en'] - The locale to use for casing.
 * @returns {string} The custom-cased string.
 */
export const toCustomCase = (
  str: string,
  delimiter: string,
  capitalizeWords: boolean = false,
  locale: string = 'en'
): string => {
  const words = splitWords(str, locale);
  return words
    .map(word => (capitalizeWords ? capitalize(word, locale) : word.toLocaleLowerCase(locale)))
    .join(delimiter);
};

export const kebabToCamelCase = (string) =>
  string.replace(/-./g, (x) => x[1].toUpperCase());

export const titleToKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const titleToCamelCase = (string) =>
  string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (x, i) =>
      i === 0 ? x.toLowerCase() : x.toUpperCase()
    )
    .replace(/\s+/g, '');

export const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const capitalize = (str) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export const toTitleCase = (s) => s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());

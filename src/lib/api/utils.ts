export const composeQueryParams = <T extends Record<string, unknown>>(
  params: Partial<T> = {},
): string => {
  const entries = Object.entries(params);
  let paramsString = entries.length > 0 ? '/?' : '';

  if (entries.length > 0) {
    entries.forEach(([key, value], index) => {
      let param = `${key}=${value}`;
      if (index < entries.length - 1) param += '&';
      paramsString += param;
    });
  }
  return paramsString;
};

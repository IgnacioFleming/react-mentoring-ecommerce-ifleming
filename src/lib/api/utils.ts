import { DataStatus } from '@/types/products';

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

export const formatCurrency = (value: number) => {
  if (isNaN(value)) throw new Error('value must be a valid number');
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
};

export const getQueryStatus = (isError: boolean, isFetching: boolean): DataStatus => {
  if (isError) return 'error';
  if (isFetching) return 'loading';
  return 'success';
};

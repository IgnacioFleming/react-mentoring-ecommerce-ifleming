import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Select } from '../../../../../../components/Select';
import styles from './ShopProductsSelect.module.scss';

export const ORDER = [
  { value: 'Default', path: '' },
  { value: 'Top Rated', path: '?orderBy=top-rated' },
  { value: 'Price Desc', path: '?orderBy=price-desc' },
  { value: 'Price Asc', path: '?orderBy=price-asc' },
] as const;

export const ShopProductsSelect = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const defaultValue = ORDER.find((o) => o.path === search)?.value || 'Default';

  const handleChange = (value: (typeof ORDER)[number]['value']) => {
    const path = ORDER.find((o) => o.value === value)?.path;
    if (path) navigate(path);
    else navigate('');
  };

  return (
    <Select onValueChange={handleChange}>
      <Select.Trigger
        className={clsx(styles.select__trigger, styles.select__trigger, styles.select__value)}
      >
        <Select.Value placeholder={defaultValue} />
        <Select.Icon className={styles.select__trigger__icon}>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.select__content}>
        {ORDER.map(({ value }, index) => (
          <Select.Item key={index} value={value} className={styles.select__option}>
            {value}
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
};

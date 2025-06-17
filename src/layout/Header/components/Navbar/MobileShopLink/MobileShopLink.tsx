import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Accordion } from '../../../../../components/Accordion';
import { MultipleCategoryProps } from '../../types/nabvar';
import styles from './MobileShopLink.module.scss';

export const MobileShopLink = ({ trigger, items, applyNavLinkStyle }: MultipleCategoryProps) => {
  const location = useLocation();
  const isActive = location.pathname === trigger.path;

  return (
    <Accordion
      type="single"
      collapsible
      className={styles.accordion}
      data-testid="mobile-shop-link"
    >
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles.accordion}>
          <div className={styles.accordion__trigger}>
            <NavLink to={trigger.path} className={applyNavLinkStyle}>
              {trigger.name}
            </NavLink>
            <ChevronDown
              className={clsx(
                styles.accordion__trigger__chevron,
                isActive ? styles['color-text'] : '',
              )}
              data-testid="chevron"
            />
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <div className={styles.accordion__content}>
            {items.map((i, index) => (
              <NavLink key={index} to={i.path}>
                {i.name}
              </NavLink>
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

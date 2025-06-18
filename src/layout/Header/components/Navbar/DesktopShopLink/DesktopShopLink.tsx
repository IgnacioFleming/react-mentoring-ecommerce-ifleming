import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { HoverCard } from '../../../../../components/HoverCard';
import { MultipleCategoryProps } from '../../types/nabvar';
import styles from './DesktopShopLink.module.scss';

export const DesktopShopLink = ({ trigger, items, applyNavLinkStyle }: MultipleCategoryProps) => {
  return (
    <HoverCard className={styles['hover-card']} openDelay={0} closeDelay={0}>
      <HoverCard.Trigger>
        <NavLink to={trigger.path} className={applyNavLinkStyle}>
          <div className={styles['hover-card__trigger']}>
            {trigger.name}
            <ChevronDown size={20} />
          </div>
        </NavLink>
      </HoverCard.Trigger>
      <HoverCard.Content className={styles['hover-card__content']}>
        {items.map((i, index) => (
          <div key={index} className={styles['hover-card__content__item']}>
            <NavLink to={i.path}>{i.name}</NavLink>
          </div>
        ))}
      </HoverCard.Content>
    </HoverCard>
  );
};

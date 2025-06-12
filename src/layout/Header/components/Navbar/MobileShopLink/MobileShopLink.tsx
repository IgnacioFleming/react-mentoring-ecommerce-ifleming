import { NavLink } from 'react-router-dom';
import { Accordion } from '../../../../../components/Accordion';
import { MultipleCategoryProps } from '../../types/nabvar';
import styles from './MobileShopLink.module.scss';

export const MobileShopLink = ({ trigger, items, applyNavLinkStyle }: MultipleCategoryProps) => {
  return (
    <Accordion type="single" collapsible className={styles.accordion}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles.accordion}>
          <NavLink to={trigger.path} className={applyNavLinkStyle}>
            {trigger.name}
          </NavLink>
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

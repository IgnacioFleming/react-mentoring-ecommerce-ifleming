import { NavLink } from 'react-router-dom';
import { Dropdown } from '../../../../../components/Dropdown';
import { MultipleCategoryProps } from '../../types/nabvar';
import styles from './DesktopShopLink.module.scss';

export const DesktopShopLink = ({ trigger, items, applyNavLinkStyle }: MultipleCategoryProps) => {
  return (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Trigger>
        <NavLink to={trigger.path} className={applyNavLinkStyle}>
          {trigger.name}
        </NavLink>
      </Dropdown.Trigger>
      <Dropdown.Content className={styles.dropdown__content}>
        {items.map((i, index) => (
          <div key={index}>
            <NavLink to={i.path}>{i.name}</NavLink>
          </div>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};

import { Accordion } from '../../../../../components/Accordion';
import { NavLink } from 'react-router-dom';
import styles from './MultipleOption.module.scss';
import { Dropdown } from '../../../../../components/Dropdown';

type MultipleOptionItem = {
  name: string;
  path: string;
};

export type MultipleOptionProps = {
  trigger: MultipleOptionItem;
  items: MultipleOptionItem[];
  applyNavLinkStyle: (props: { isActive: boolean }) => string;
};

export const MultipleOption = ({ trigger, items, applyNavLinkStyle }: MultipleOptionProps) => {
  // const [mediaWidth, setMediaWidth] = useState('');
  const mediaWidth = 800;
  // const width = matchMedia('("min-width:768")');
  // console.log(width);

  return (
    <>
      {mediaWidth < 768 ? (
        <>
          <Accordion type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger className={styles['multiple-option__accordion']}>
                <NavLink to={trigger.path} className={applyNavLinkStyle}>
                  {trigger.name}
                </NavLink>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className={styles['multiple-option__accordion__content']}>
                  {items.map((i, index) => (
                    <NavLink key={index} to={i.path}>
                      {i.name}
                    </NavLink>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </>
      ) : (
        <>
          <Dropdown>
            <Dropdown.Trigger>
              <NavLink to={trigger.path} className={applyNavLinkStyle}>
                {trigger.name}
              </NavLink>
            </Dropdown.Trigger>
            <Dropdown.Content>
              {items.map((i, index) => (
                <div>
                  <NavLink key={index} to={i.path} className={applyNavLinkStyle}>
                    {i.name}
                  </NavLink>
                </div>
              ))}
            </Dropdown.Content>
          </Dropdown>
        </>
      )}
    </>
  );
};

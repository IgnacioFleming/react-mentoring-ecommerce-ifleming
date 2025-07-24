import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Card } from '../../Card';
import { Button } from '../../Button';
import styles from './Content.module.scss';

type ContentProps = { children: ReactNode };

export const Content = ({ children }: ContentProps) => (
  <Card.Content className={styles.content}>
    {children}
    <Card.Footer>
      <Button
        variant="outline"
        rounded
        rightIcon={<ChevronRight size={24} />}
        className={styles.content__footer__btn}
      >
        Learn More
      </Button>
    </Card.Footer>
  </Card.Content>
);

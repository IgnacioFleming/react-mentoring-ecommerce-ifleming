import { PropsWithChildren } from 'react';
import { Card } from '../Card';
import { Thumbnail } from './Thumbnail';
import { Content } from './Content';
import { Header } from './Header';
import { Main } from './Main';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ children }: PropsWithChildren) => (
  <li className={styles.container}>
    <Card className={styles.card}>{children}</Card>
  </li>
);

ProductCard.Thumbnail = Thumbnail;
ProductCard.Content = Content;
ProductCard.Header = Header;
ProductCard.Main = Main;

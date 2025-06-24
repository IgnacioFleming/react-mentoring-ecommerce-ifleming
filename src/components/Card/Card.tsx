import { ReactNode } from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

type Root = {
  children: ReactNode;
  className?: string;
};

type Thumbnail = {
  src: string;
  alt?: string;
} & Partial<Root>;

type Content = Root;
type Header = Root;
type Main = Root;
type Footer = Root;

export const Card = ({ children, className }: Root) => (
  <article className={clsx(styles.card, className)} data-testid="card">
    {children}
  </article>
);

Card.displayName = 'Card';

const Thumbnail = ({ src, alt, className, children }: Thumbnail) => (
  <div className={className} data-testid="card-thumbnail">
    <img src={src} alt={alt} className={styles.card__thumbnail} />
    {children}
  </div>
);

Card.Thumbnail = Thumbnail;

const Content = ({ className, children }: Content) => (
  <div className={clsx(styles.card__content, className)} data-testid="card-content">
    {children}
  </div>
);

Card.Content = Content;

const Header = ({ className, children }: Header) => (
  <header className={className} data-testid="card-header">
    {children}
  </header>
);

Card.Header = Header;

const Main = ({ className, children }: Main) => (
  <div className={className} data-testid="card-header">
    {children}
  </div>
);

Card.Main = Main;

const Footer = ({ className, children }: Footer) => (
  <footer className={className} data-testid="card-footer">
    {children}
  </footer>
);

Card.Footer = Footer;

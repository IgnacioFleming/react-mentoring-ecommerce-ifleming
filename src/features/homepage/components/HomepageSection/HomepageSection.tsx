import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './HomepageSection.module.scss';

type SectionContainerProps = { children: ReactNode; className?: string };
export type HeaderProps = { title: string; subtitle: string; eyebrow?: string; classname?: string };
type ContentProps = SectionContainerProps;

export const HomepageSection = ({ children, className }: SectionContainerProps) => (
  <section className={clsx(styles['section-container'], className)} data-testid="homepage-section">
    {children}
  </section>
);

HomepageSection.displayName = 'HomepageSection';

const Header = ({ title, subtitle, eyebrow, classname }: HeaderProps) => (
  <header className={clsx(styles.header, classname)}>
    {eyebrow && <h4>{eyebrow}</h4>}
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </header>
);

HomepageSection.Header = Header;

const Content = ({ children, className }: ContentProps) => (
  <div className={className}>{children}</div>
);

HomepageSection.Content = Content;

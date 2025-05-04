import { ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
);

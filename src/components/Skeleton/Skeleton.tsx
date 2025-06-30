import clsx from 'clsx';
import styles from './Skeleton.module.scss';

type SkeletonProps = { className: string };

export const Skeleton = ({ className }: SkeletonProps) => (
  <div className={clsx(styles.skeleton, className)} />
);

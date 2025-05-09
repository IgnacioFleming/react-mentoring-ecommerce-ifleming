import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rounded?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = 'md',
  variant = 'solid',
  leftIcon,
  rightIcon,
  rounded = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--variant-${variant}`],
        styles[`button--size-${size}`],
        { [styles['button--rounded']]: rounded },
        className,
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

import { CircleX } from 'lucide-react';
import styles from './ErrorSection.module.scss';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

type ErrorSectionProps = {
  title: string;
  message: string;
  goBackBtn?: boolean;
};

export const ErrorSection = ({ title, message, goBackBtn }: ErrorSectionProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <header className={styles.error__header}>
        <CircleX />
        <h4>{title}</h4>
      </header>
      <p>{message}</p>
      {goBackBtn && (
        <footer className={styles.error__footer}>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </footer>
      )}
    </div>
  );
};

import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <Container className={styles['not-found']}>
      <h1>404</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" className={styles['not-found__link']}>
        ← Back to home
      </Link>
    </Container>
  );
};

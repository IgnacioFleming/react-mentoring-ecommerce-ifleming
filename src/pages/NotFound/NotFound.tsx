import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <Container className={styles.container}>
      <h1>404</h1>
      <p>The page you're looking for does not exist.</p>
      <Link
        to="/"
        style={{
          marginTop: '1rem',
          display: 'inline-block',
          color: '#1e90ff',
          textDecoration: 'underline',
        }}
      >
        ← Back to home
      </Link>
    </Container>
  );
};

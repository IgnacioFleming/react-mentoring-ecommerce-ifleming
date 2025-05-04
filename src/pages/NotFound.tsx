import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
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
    </div>
  );
};

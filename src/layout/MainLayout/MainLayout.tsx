import { Outlet } from 'react-router-dom';
import { useScrollTop } from '../hooks/useScrollTop';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  useScrollTop();
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

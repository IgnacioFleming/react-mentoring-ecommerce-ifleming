import { Link } from 'react-router-dom';
import styles from './FeaturedCategories.module.scss';
import clsx from 'clsx';

export const FeaturedCategories = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3>FEATURED CATEGORIES</h3>
        <p>Explore our most loved collections, handpicked for every style</p>
      </header>
      <ul className={styles['featured-categories']}>
        <li className={styles['featured-categories__item']}>
          <Link to="/shop/category/mens-watches">
            <figure>
              <img
                className={styles['featured-categories__item__img']}
                src="/src/assets/images/featured-categories/men-watches.webp"
                alt="Men's watches photo"
                title="Men's watches"
              />
              <figcaption>
                <h5>MEN'S WATCHES</h5>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li className={styles['featured-categories__item']}>
          <Link to="/shop/category/womens-shoes">
            <figure>
              <img
                className={styles['featured-categories__item__img']}
                src="/src/assets/images/featured-categories/women-shoes.webp"
                alt="Women's shoes photo"
                title="Women's shoes"
              />
              <figcaption>
                <h5>WOMEN'S SHOES</h5>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li className={styles['featured-categories__item']}>
          <ul className={styles['featured-categories__item--stacked']}>
            <li className={styles['featured-categories__item']}>
              <Link to="/shop/category/sunglasses">
                <figure>
                  <img
                    className={clsx(
                      styles['featured-categories__item__img'],
                      styles['featured-categories__item--stacked__img'],
                    )}
                    src="/src/assets/images/featured-categories/sunglasses.webp"
                    alt="Sunglasses photo"
                    title="Sunglasses"
                  />
                  <figcaption>
                    <h5>SUNGLASSES</h5>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li className={styles['featured-categories__item']}>
              <Link to="/shop/category/smartphones">
                <figure>
                  <img
                    className={clsx(
                      styles['featured-categories__item__img'],
                      styles['featured-categories__item--stacked__img'],
                    )}
                    src="/src/assets/images/featured-categories/smartphones.webp"
                    alt="Smartphones photo"
                    title="Smartphones"
                  />
                  <figcaption>
                    <h5>SMARTPHONES</h5>
                  </figcaption>
                </figure>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

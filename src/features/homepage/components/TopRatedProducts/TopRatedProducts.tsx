import { Link } from 'react-router-dom';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import { Card } from '../../../../components/Card';
import { Button } from '../../../../components/Button';
import { PRODUCTS } from './products';
import styles from './TopRatedProducts.module.scss';

export const TopRatedProducts = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h4>Featured Products</h4>
        <h3>Top Rated Products</h3>
        <p>Customer favorites loved for quality and style</p>
      </header>
      <ul>
        {PRODUCTS.slice(0, 1).map((p, index) => (
          <Card key={index}>
            <Card.Thumbnail src={p.thumbnail} alt={`${p.name} photo`}>
              <div>
                <Heart />
                <ShoppingCart />
                <Eye />
              </div>
            </Card.Thumbnail>
            <Card.Content>
              <Card.Header>
                <Link to="">{p.brand}</Link>
                <div>
                  <Star />
                  <small>{p.rating}</small>
                </div>
              </Card.Header>
              <Card.Main>
                <h5>{p.name}</h5>
                <div>
                  <h5>{p.price}</h5>
                  <h5>{p.discount}</h5>
                </div>
              </Card.Main>
              <Card.Footer>
                <Button>Read more</Button>
              </Card.Footer>
            </Card.Content>
          </Card>
        ))}
      </ul>
    </section>
  );
};

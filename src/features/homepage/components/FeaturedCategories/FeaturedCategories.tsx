import { Link } from 'react-router-dom';

export const FeaturedCategories = () => {
  return (
    <section>
      <header>
        <h3>FEATURED CATEGORIES</h3>
        <p>Explore our most loved collections, handpicked for every style</p>
      </header>
      <ul>
        <li>
          <Link to="/shop/category/mens-watches">
            <img src="/src/assets/images/featured-categories/men-watches.webp" alt="" />
            <caption>MEN'S WATCHES</caption>
          </Link>
        </li>
        <li>
          <Link to="/shop/category/womens-shoes">
            <img src="/src/assets/images/featured-categories/women-shoes.webp" alt="" />
            <caption>WOMEN'S SHOES</caption>
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/shop/category/sunglasses">
                <img src="/src/assets/images/featured-categories/sunglasses.webp" alt="" />
                <caption>SUNGLASSES</caption>
              </Link>
            </li>
            <li>
              <Link to="/shop/category/smartphones">
                <img src="/src/assets/images/featured-categories/smartphones.webp" alt="" />
                <caption>SMARTPHONES</caption>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

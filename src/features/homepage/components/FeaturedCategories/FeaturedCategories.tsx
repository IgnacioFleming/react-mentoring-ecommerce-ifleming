import { FeaturedCategoriesList } from './FeaturedCategoriesList';
import { HomepageSection } from '../HomepageSection';

export const FeaturedCategories = () => {
  return (
    <HomepageSection>
      <HomepageSection.Header
        title="Featured Categories"
        subtitle="Explore our most loved collections, handpicked for every style"
      />
      <HomepageSection.Content>
        <FeaturedCategoriesList />
      </HomepageSection.Content>
    </HomepageSection>
  );
};

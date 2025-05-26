import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';

export const Category = () => {
  const { category } = useParams();

  return (
    <Container>
      <h2>{category}</h2>
      <h3>Product Grid</h3>
    </Container>
  );
};

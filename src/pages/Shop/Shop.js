import { useProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard';
import './Shop.scss';

const Shop = () => {
  const { products } = useProductsContext();

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

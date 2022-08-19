import { useProductsContext } from '../../contexts/ProductsContext';

import ProductCard from '../../components/ProductCard';
import SelectInput from '../../components/SelectInput';

import './Shop.scss';

const Shop = () => {
  const { products, categories, colors, setGenderCriteria, setCategoryCriteria, setColorCriteria } = useProductsContext();

  const handleGenderChange = (e) => {
    setGenderCriteria(e.target.value);
  }
  const handleCategoryChange = (e) => {
    setCategoryCriteria(e.target.value);
  }
  const handleColorChange = (e) => {
    setColorCriteria(e.target.value);
  }

  return (
    <div className='shop-container'>
      <div className='header'>
        <div className='category-selector-container'>
          <SelectInput label='Gender' style={{ margin: '30px 0', width: '32%' }} onChange={handleGenderChange}>
            <option value='all'>All</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
          </SelectInput>
          <SelectInput label='Category' style={{ margin: '30px 0', width: '32%' }} onChange={handleCategoryChange}>
            <option value='all'>All</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.title}
              </option>
            ))}
          </SelectInput>
          <SelectInput label='Color' style={{ margin: '30px 0', width: '32%' }} onChange={handleColorChange}>
            <option value='all'>All</option>
            {colors.map((c) => (
              <option key={c._id} value={c._id}>
                {c.title}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

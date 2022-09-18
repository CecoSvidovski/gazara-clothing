import { useSearchParams } from 'react-router-dom';

import { useProductsContext } from '../../contexts/ProductsContext';

import ProductCard from '../../components/ProductCard';
import SelectInput from '../../components/SelectInput';

import './styles.scss';
import { useEffect } from 'react';

const Shop = () => {
  const { products, categories, colors, setParams } = useProductsContext();

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setParams({
      genderCriteria: searchParams.get('gender'),
      categoryCriteria: searchParams.get('category'),
      colorCriteria: searchParams.get('color'),
    });
  }, [searchParams, setParams]);

  const genderCriteria = searchParams.get('gender');
  const categoryCriteria = searchParams.get('category');
  const colorCriteria = searchParams.get('color');

  const handleGenderChange = (e) => {
    let search = {};

    const categoryPrevParam = searchParams.get('category');
    const colorPrevParam = searchParams.get('color');

    if (e.target.value !== 'all') search.gender = e.target.value;
    if (categoryPrevParam && categoryPrevParam !== 'all')
      search.category = searchParams.get('category');
    if (colorPrevParam && colorPrevParam !== 'all')
      search.color = searchParams.get('color');

    setSearchParams(search);
  };
  const handleCategoryChange = (e) => {
    let search = {};

    const genderPrevParam = searchParams.get('gender');
    const colorPrevParam = searchParams.get('color');

    if (genderPrevParam && genderPrevParam !== 'all')
      search.gender = searchParams.get('gender');
    if (e.target.value !== 'all') search.category = e.target.value;
    if (colorPrevParam && colorPrevParam !== 'all')
      search.color = searchParams.get('color');

    setSearchParams(search);
  };
  const handleColorChange = (e) => {
    let search = {};

    const genderPrevParam = searchParams.get('gender');
    const categoryPrevParam = searchParams.get('category');

    if (genderPrevParam && genderPrevParam !== 'all')
      search.gender = searchParams.get('gender');
    if (categoryPrevParam && categoryPrevParam !== 'all')
      search.category = searchParams.get('category');
    if (e.target.value !== 'all') search.color = e.target.value;

    setSearchParams(search);
  };

  return (
    <div className='shop-container'>
      <div className='header'>
        <div className='category-selector-container'>
          <SelectInput
            label='Gender'
            style={{ margin: '30px 0', width: '32%' }}
            onChange={handleGenderChange}
            value={genderCriteria || 'all'}
          >
            <option value='all'>All</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
          </SelectInput>
          <SelectInput
            label='Category'
            style={{ margin: '30px 0', width: '32%' }}
            onChange={handleCategoryChange}
            value={categoryCriteria || 'all'}
          >
            <option value='all'>All</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.title}
              </option>
            ))}
          </SelectInput>
          <SelectInput
            label='Color'
            style={{ margin: '30px 0', width: '32%' }}
            onChange={handleColorChange}
            value={colorCriteria || 'all'}
          >
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

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

import Carousel from '../../components/Carousel';
import ImageSkeleton from '../../components/ImageSkeleton';

import { useBagContext } from '../../contexts/BagContext';
import { getProductById } from '../../utils/firebase';
import { toTitleCase } from '../../utils/stringUtils';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const { addItemToBag } = useBagContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const product = await getProductById(id);
      setProduct(product);
    })();
  }, [id]);

  const handleAddToBag = () => addItemToBag(product);

  return (
    <div className='product-container'>
      <div className='slider-container'>
        {product.imageUrls && product.imageUrls.length > 0 ? (
          <Carousel imageUrls={product.imageUrls} />
        ) : (
          <ImageSkeleton />
        )}
      </div>
      <div className='product-info-container'>
        <div className='product-info'>
          <div className='title'>
            <h2>{product.name}</h2>
          </div>
          <div className='info-block'>
            <span className='block-title'>Category:</span>
            <span className='block-value'>
              {product.category ? toTitleCase(product.category) : ''}
            </span>
          </div>
          <div className='info-block'>
            <span className='block-title'>Color:</span>
            <span className='block-value'>
              {product.color ? toTitleCase(product.color) : ''}
            </span>
          </div>
          <div className='info-block'>
            <span className='block-title'>Description:</span>
            <span className='block-value'>
              {product.description ? toTitleCase(product.description) : ''}
            </span>
          </div>
        </div>
        <div className='add-to-cart'>
          <div className='price-block'>
            <span className='block-title'>Price: </span>
            <span className='block-value'>${product.price}</span>
          </div>
          <Button style={{ width: '100%' }} onClick={handleAddToBag}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

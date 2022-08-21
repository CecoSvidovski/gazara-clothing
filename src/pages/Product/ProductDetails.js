import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

import Carousel from '../../components/Carousel';
import ImageSkeleton from '../../components/ImageSkeleton';
import { ReactComponent as HeartIcon } from './assets/heart.svg';

import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { getProductById, auth } from '../../utils/firebase';
import { toTitleCase } from '../../utils/stringUtils';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const { addItemToBag } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } =
    useFavoritesContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const product = await getProductById(id);
      setProduct(product);
    })();
  }, [id]);

  const handleAddToBag = () => addItemToBag(product);
  const handleAddToFavorites = () => {
    const user = auth.currentUser;
    if (!user) {
      return alert(
        'You need to be logged in in order to add items to your favorites.'
      );
    }
    addItemToFavorites(product);
  };
  const handleRemoveFromFavorites = () => {
    const user = auth.currentUser;
    if (!user) {
      return alert(
        'You need to be logged in in order to remove items from your favorites.'
      );
    }
    removeItemFromFavorites(product);
  };

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === product._id);

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
          <div className='title-block'>
            <span className='title'>
              <h2>{product.name}</h2>
            </span>
            <span className='add-to-favorites'>
              {itemAlreadyInFavorites ? (
                <span
                  className='add-to-favorites active'
                  onClick={handleRemoveFromFavorites}
                >
                  <HeartIcon className='heart-icon' />
                </span>
              ) : (
                <span
                  className='add-to-favorites'
                  onClick={handleAddToFavorites}
                >
                  <HeartIcon className='heart-icon' />
                </span>
              )}
            </span>
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

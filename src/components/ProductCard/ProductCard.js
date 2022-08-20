import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { auth } from '../../utils/firebase';

import Button from '../Button/Button';
import ImageSkeleton from '../ImageSkeleton';
import { ReactComponent as HeartIcon } from './assets/heart.svg';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { _id, name, price, previewUrl } = product;
  const { addItemToBag } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } =
    useFavoritesContext();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.src = previewUrl;
  }, [previewUrl]);

  const handleViewProduct = () => navigate(`/products/${_id}`);
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

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === _id);

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        {isImageLoading ? (
          <ImageSkeleton />
        ) : (
          <img src={previewUrl} alt={name} />
        )}
      </div>
      <div className='footer'>
        <span className='product-name'>{name}</span>
        <span className='product-price'>{price}</span>
      </div>
      <div className='button-container'>
        <Button
          buttonType='smallInverted'
          style={{ width: '37%', padding: '0 10px' }}
          onClick={handleViewProduct}
        >
          View
        </Button>
        <Button
          buttonType='smallInverted'
          style={{ width: '58%', padding: '0 10px' }}
          onClick={handleAddToBag}
        >
          Add to bag
        </Button>
      </div>
      <div className='favorites-container'>
        {itemAlreadyInFavorites ? (
          <span
            className='add-to-favorites active'
            onClick={handleRemoveFromFavorites}
          >
            <HeartIcon className='heart-icon' />
          </span>
        ) : (
          <span className='add-to-favorites' onClick={handleAddToFavorites}>
            <HeartIcon className='heart-icon' />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

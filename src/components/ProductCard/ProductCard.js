import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { getImgUrl } from '../../utils/firebase';

import Button from '../Button/Button';
import ImageSkeleton from '../ImageSkeleton';
import { ReactComponent as HeartIcon } from './assets/heart.svg';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { _id, name, price, previewPath } = product;
  const { addItemToBag } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } =
    useFavoritesContext();
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const img = new Image();
      img.onload = () => {
        setIsImageLoading(false);
      };
      const imgUrl = await getImgUrl(previewPath);
      img.src = imgUrl;
      setImageUrl(imgUrl);
    })();
  }, [product, previewPath]);

  const handleViewProduct = () => navigate(`/products/${_id}`);
  const handleAddToBag = () => addItemToBag(product);
  const handleAddToFavorites = () => addItemToFavorites(product);
  const handleRemoveFromFavorites = () => removeItemFromFavorites(product);

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === _id);

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        {isImageLoading ? <ImageSkeleton /> : <img src={imageUrl} alt={name} />}
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

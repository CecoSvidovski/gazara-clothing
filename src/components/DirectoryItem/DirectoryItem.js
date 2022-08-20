import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getImgUrl } from '../../utils/firebase';
import ImageSkeleton from '../ImageSkeleton';

import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { title, text, url } = category;
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    getImgUrl(category.imagePath).then((imageUrl) => {
      setImageUrl(imageUrl);
      img.src = imageUrl;
    });
  }, [category]);

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    return navigate(url);
  };

  return (
    <div
      className='category-container'
      style={
        title === 'men' || title === 'women'
          ? {
              minWidth: '40%',
            }
          : null
      }
      onClick={handleNavigate}
    >
      {isImageLoading ? (
        <ImageSkeleton />
      ) : (
        <>
          <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className='category-body'>
            <h2>{text}</h2>
            <p>Shop Now</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DirectoryItem;

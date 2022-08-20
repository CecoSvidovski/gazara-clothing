import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ImageSkeleton from '../ImageSkeleton';

import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { title, text, url } = category;
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.src = category.imageUrl;
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
            style={{ backgroundImage: `url(${category.imageUrl})` }}
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

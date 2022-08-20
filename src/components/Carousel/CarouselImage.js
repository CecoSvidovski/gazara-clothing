import { useState, useEffect } from 'react';

import ImageSkeleton from '../ImageSkeleton';

const CarouselImage = ({ imageUrl }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return isImageLoading ? (
    <ImageSkeleton />
  ) : (
    <img src={imageUrl} alt='Product' />
  );
};

export default CarouselImage;

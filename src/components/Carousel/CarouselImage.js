import { useState, useEffect } from 'react';

import { getImgUrl } from '../../utils/firebase';
import ImageSkeleton from '../ImageSkeleton';

const CarouselImage = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    (async () => {
      const imgUrl = await getImgUrl(imagePath);
      img.src = imgUrl;
      setImageUrl(imgUrl)
    })();
  }, [imagePath]);

  return(isImageLoading ? <ImageSkeleton /> : <img src={imageUrl} alt='Product' />)
};

export default CarouselImage;

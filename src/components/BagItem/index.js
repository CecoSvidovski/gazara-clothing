import { useState, useEffect } from 'react';

import ImageSkeleton from '../ImageSkeleton';
import { ReactComponent as XIcon } from './assets/x.svg';
import { ReactComponent as ChevronLeftIcon } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from './assets/chevron-right.svg';

import {
  BagItemContainer,
  IconButton,
  ImageContainer,
  Multiplied,
  Name,
  Price,
  Quantity,
  QuantityValue,
  RemoveButton,
  TotalPrice,
} from './styled';

const BagItem = ({ item, addItem, removeItem }) => {
  const { name, price, quantity } = item;

  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.src = item.previewUrl;
  }, [item]);

  const handleIncreaseQuantity = () => addItem(item);
  const handleDecreaseQuantity = () => removeItem(item, 1);
  const handleRemoveItem = () => removeItem(item, -1);

  return (
    <BagItemContainer>
      <ImageContainer>
        {isImageLoading ? (
          <ImageSkeleton />
        ) : (
          <img src={item.previewUrl} alt={name} />
        )}
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <IconButton onClick={handleDecreaseQuantity}>
          <ChevronLeftIcon className='chevron-left' />
        </IconButton>
        <QuantityValue>{quantity}</QuantityValue>
        <IconButton onClick={handleIncreaseQuantity}>
          <ChevronRightIcon className='chevron-right' />
        </IconButton>
      </Quantity>
      <Price>
        <Multiplied>x</Multiplied>${price}
      </Price>
      <TotalPrice>${price * quantity}</TotalPrice>
      <RemoveButton onClick={handleRemoveItem}>
        <XIcon className='x-icon' />
      </RemoveButton>
    </BagItemContainer>
  );
};

export default BagItem;

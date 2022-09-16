import { ReactComponent as XIcon } from './assets/x.svg';

import { CartItemContainer, FavoriteButton, HeartIcon, ImageContainer, ItemDetails, ItemTotalContainer, ItemTotalPrice, Name, NameContainer, Price, RemoveButton } from './styled';

const BagNavItem = ({
  item,
  removeItem,
  favoriteItems,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { name, price, quantity } = item;

  const handleRemoveItem = () => removeItem(item, -1);
  const handleAddToFavorites = () => addToFavorites(item);
  const handleRemoveFromFavorites = () => removeFromFavorites(item);

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === item._id);

  return (
    <CartItemContainer>
      <ImageContainer>
        <img src={item.previewUrl} alt={name} />
      </ImageContainer>
      <ItemDetails>
        <NameContainer>
          <Name>{name}</Name>
          <Price>
            {quantity} x ${price}
          </Price>
          {!itemAlreadyInFavorites ? (
            <FavoriteButton onClick={handleAddToFavorites}>
              <HeartIcon />
              Add to favorites
            </FavoriteButton>
          ) : (
            <FavoriteButton 
              className='active'
              onClick={handleRemoveFromFavorites}
            >
              <HeartIcon />
              Added to favorites
            </FavoriteButton>
          )}
        </NameContainer>
        <ItemTotalContainer>
          <ItemTotalPrice>${quantity * price}</ItemTotalPrice>
        </ItemTotalContainer>
      </ItemDetails>
      <RemoveButton onClick={handleRemoveItem}>
        <XIcon className='x-icon' />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default BagNavItem;

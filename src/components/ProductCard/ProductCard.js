import './ProductCard.scss';

import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='footer'>
        <span className='product-name'>{name}</span>
        <span className='product-price'>{price}</span>
      </div>
      <div className='button-container'>
        <Button buttonType='smallInverted' style={{ width: '35%' }}>
          View
        </Button>
        <Button buttonType='smallInverted' style={{ width: '60%' }}>
          Add to bag
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

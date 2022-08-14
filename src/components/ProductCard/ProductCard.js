import { useBagContext } from '../../contexts/BagContext';

import Button from '../Button/Button';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToBag } = useBagContext();

  const handleAddProduct = () => {
    addItemToBag(product);
  };

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
        <Button
          buttonType='smallInverted'
          style={{ width: '60%' }}
          onClick={handleAddProduct}
        >
          Add to bag
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

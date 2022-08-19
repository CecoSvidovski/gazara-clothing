import { useNavigate } from 'react-router-dom';

import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return navigate(category.url);
  };

  return (
    <div
      className='category-container'
      style={
        category.title === 'men' || category.title === 'women'
          ? {
              minWidth: '40%',
            }
          : null
      }
      onClick={handleNavigate}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className='category-body'>
        <h2>{category.text}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

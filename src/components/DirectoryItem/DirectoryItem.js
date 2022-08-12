import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => (
  <div
    className='category-container'
    style={
      (category.title === 'men' || category.title === 'women') ? {
        minWidth: '40%',
      } : null
    }
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

export default DirectoryItem;

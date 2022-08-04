import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => (
  <div className='category-container'>
    <div
      className='background-image'
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    />
    <div className='category-body'>
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default DirectoryItem;

import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: '/img/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: '/img/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: '/img/sneakers.webp',
    },
    {
      id: 4,
      title: 'women',
      imageUrl: '/img/women.jpg',
    },
    {
      id: 5,
      title: 'men',
      imageUrl: '/img/men.png',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ _id, title, imageUrl }) => (
        <div className='category-container' key={_id}>
          <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className='category-body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Directory;

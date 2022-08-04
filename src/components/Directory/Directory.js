import DirectoryItem from '../DirectoryItem';
import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      _id: 1,
      title: 'hats',
      imageUrl: '/img/hats.png',
    },
    {
      _id: 2,
      title: 'jackets',
      imageUrl: '/img/jackets.png',
    },
    {
      _id: 3,
      title: 'sneakers',
      imageUrl: '/img/sneakers.webp',
    },
    {
      _id: 4,
      title: 'women',
      imageUrl: '/img/women.jpg',
    },
    {
      _id: 5,
      title: 'men',
      imageUrl: '/img/men.png',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

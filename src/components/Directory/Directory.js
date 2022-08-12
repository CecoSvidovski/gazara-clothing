import DirectoryItem from '../DirectoryItem';
import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      _id: 1,
      title: 'men',
      imageUrl: '/img/men.png',
      text: 'Men'
    },
    {
      _id: 2,
      title: 'women',
      imageUrl: '/img/women.jpg',
      text: 'Women'
    },
    {
      _id: 3,
      title: 'denim',
      imageUrl: '/img/denim.jpg',
      text: 'Denim'
    },
    {
      _id: 4,
      title: 'sneakers',
      imageUrl: '/img/sneakers.jpg',
      text: 'Sneakers'
    },
    {
      _id: 5,
      title: 'jackets',
      imageUrl: '/img/jackets.jpg',
      text: 'Jackets'
    },
    {
      _id: 6,
      title: 'shirts',
      imageUrl: '/img/shirts.png',
      text: 'Shirts'
    },
    
    {
      _id: 8,
      title: 'all',
      imageUrl: '/img/all.png',
      text: 'And more.'
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

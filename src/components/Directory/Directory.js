import DirectoryItem from '../DirectoryItem';
import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      _id: 1,
      title: 'men',
      imageUrl: '/img/men.png',
      text: 'Men',
      url: '/shop?gender=men'
    },
    {
      _id: 2,
      title: 'women',
      imageUrl: '/img/women.jpg',
      text: 'Women',
      url: '/shop?gender=women'
    },
    {
      _id: 3,
      title: 'denim',
      imageUrl: '/img/denim.jpg',
      text: 'Denim',
      url: '/shop?category=denim'
    },
    {
      _id: 4,
      title: 'sneakers',
      imageUrl: '/img/sneakers.jpg',
      text: 'Sneakers',
      url: '/shop?category=sneakers'
    },
    {
      _id: 5,
      title: 'jackets',
      imageUrl: '/img/jackets.jpg',
      text: 'Jackets',
      url: '/shop?category=jackets'
    },
    {
      _id: 6,
      title: 'shirts',
      imageUrl: '/img/shirts.png',
      text: 'Shirts',
      url: '/shop?category=shirts-and-blouses'
    },
    
    {
      _id: 8,
      title: 'all',
      imageUrl: '/img/all.png',
      text: 'And more.',
      url: '/shop'
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

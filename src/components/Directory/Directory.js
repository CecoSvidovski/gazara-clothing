import DirectoryItem from '../DirectoryItem';
import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      _id: 1,
      title: 'men',
      imagePath: '/img/directory/men.jpg',
      text: 'Men',
      url: '/shop?gender=men'
    },
    {
      _id: 2,
      title: 'women',
      imagePath: '/img/directory/women.jpg',
      text: 'Women',
      url: '/shop?gender=women'
    },
    {
      _id: 3,
      title: 'denim',
      imagePath: '/img/directory/denim.jpg',
      text: 'Denim',
      url: '/shop?category=denim'
    },
    {
      _id: 4,
      title: 'shoes',
      imagePath: '/img/directory/sneakers.jpg',
      text: 'Shoes',
      url: '/shop?category=shoes'
    },
    {
      _id: 5,
      title: 'jackets',
      imagePath: '/img/directory/jackets.jpg',
      text: 'Jackets',
      url: '/shop?category=jackets'
    },
    {
      _id: 6,
      title: 'shirts',
      imagePath: '/img/directory/shirts.png',
      text: 'Shirts',
      url: '/shop?category=shirts-and-blouses'
    },
    
    {
      _id: 8,
      title: 'all',
      imagePath: '/img/directory/all.png',
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

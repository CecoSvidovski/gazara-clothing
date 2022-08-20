import DirectoryItem from '../DirectoryItem';
import './Directory.scss';

const Directory = () => {
  const categories = [
    {
      _id: 1,
      title: 'men',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fmen.jpg?alt=media&token=9794b700-cb32-4b21-bb9d-0ad55f1fe9a5',
      text: 'Men',
      url: '/shop?gender=men',
    },
    {
      _id: 2,
      title: 'women',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fwomen.jpg?alt=media&token=d75a9f4e-1c06-428b-a2e7-58b28d9a334d',
      text: 'Women',
      url: '/shop?gender=women',
    },
    {
      _id: 3,
      title: 'denim',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fdenim.jpg?alt=media&token=5d12c0d4-fdbe-4005-8396-a059e210869a',
      text: 'Denim',
      url: '/shop?category=denim',
    },
    {
      _id: 4,
      title: 'shoes',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fsneakers.jpg?alt=media&token=9fd8250f-58a4-402c-9f35-94580447a9aa',
      text: 'Shoes',
      url: '/shop?category=shoes',
    },
    {
      _id: 5,
      title: 'jackets',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fjackets.jpg?alt=media&token=ec9bfff1-703a-44d1-8299-84790ef7830a',
      text: 'Jackets',
      url: '/shop?category=jackets',
    },
    {
      _id: 6,
      title: 'shirts',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fshirts.png?alt=media&token=abb83901-f83c-474d-8cab-7981e892f3b7',
      text: 'Shirts',
      url: '/shop?category=shirts-and-blouses',
    },

    {
      _id: 8,
      title: 'all',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/gazara-clothing.appspot.com/o/img%2Fdirectory%2Fall.png?alt=media&token=8c38d217-0d3e-441a-bcc7-cdc7a9f5e9bf',
      text: 'And more.',
      url: '/shop',
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

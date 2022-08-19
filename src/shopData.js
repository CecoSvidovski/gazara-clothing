import { uuid } from './utils/stringUtils';

const SHOP_DATA = {
  men: [
    {
      categoryTitle: 'Hats',
      items: [
        {
          _id: uuid(),
          name: 'Black Buckethat with Pattern',
          previewPath: 'img/products/men/hats/01/preview.jpg',
          imagePaths: [
            'img/products/men/hats/01/01.jpg',
            'img/products/men/hats/01/02.jpg',
          ],
          price: 25,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in consectetur enim, et tempus sapien. Donec molestie est eget quam consectetur, sed maximus risus porttitor.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Brim with Black Strap',
          previewPath: 'img/products/men/hats/02/preview.jpg',
          imagePaths: [
            'img/products/men/hats/02/01.jpg',
            'img/products/men/hats/02/02.jpg',
            'img/products/men/hats/02/03.jpg',
          ],
          price: 18,
          description:
            'Curabitur ultricies, erat sed scelerisque interdum, dui est commodo ligula, sit amet fermentum mi nisl id dui. Morbi in vestibulum justo, at placerat augue.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Black Cap',
          previewPath: 'img/products/men/hats/03/preview.jpg',
          imagePaths: [
            'img/products/men/hats/03/01.jpg',
            'img/products/men/hats/03/02.jpg',
            'img/products/men/hats/03/03.jpg',
          ],
          price: 22,
          description:
            'Morbi et sem sit amet leo pretium viverra. Vivamus vehicula feugiat ipsum, non imperdiet ipsum mattis at. Nunc diam eros, aliquet vitae nunc id, lobortis condimentum ante.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Red Brim',
          previewPath: 'img/products/men/hats/04/preview.jpg',
          imagePaths: [
            'img/products/men/hats/04/01.jpg',
            'img/products/men/hats/04/02.jpg',
            'img/products/men/hats/04/03.jpg',
          ],
          price: 25,
          description:
            'Sed ultrices pulvinar magna eget finibus. Maecenas pharetra nec metus eget facilisis. Morbi vehicula leo in sollicitudin vestibulum. Aenean eleifend pulvinar nulla, non dictum eros aliquam ut.',
          gender: 'men',
          color: 'red',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Black Brim',
          previewPath: 'img/products/men/hats/05/preview.jpg',
          imagePaths: [
            'img/products/men/hats/05/01.jpg',
            'img/products/men/hats/05/02.jpg',
            'img/products/men/hats/05/03.jpg',
          ],
          price: 24,
          description:
            'Proin mattis tristique ante, vitae tempus dui hendrerit ut. Quisque ultrices molestie metus id consectetur. Praesent fermentum sed nulla eget laoreet.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Red Beanie',
          previewPath: 'img/products/men/hats/06/preview.jpg',
          imagePaths: [
            'img/products/men/hats/06/01.jpg',
            'img/products/men/hats/06/02.jpg',
            'img/products/men/hats/06/03.jpg',
          ],
          price: 14,
          description:
            'Nunc elementum, mi a tincidunt euismod, sem augue eleifend leo, id efficitur nisl nisl sed eros. Donec id ultricies tellus. Nulla tellus sem, viverra eget porttitor a, ullamcorper eu erat.',
          gender: 'men',
          color: 'red',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Yellow Beanie',
          previewPath: 'img/products/men/hats/06/preview.jpg',
          imagePaths: [
            'img/products/men/hats/06/01.jpg',
            'img/products/men/hats/06/02.jpg',
            'img/products/men/hats/06/03.jpg',
          ],
          price: 16,
          description:
            'Aliquam erat volutpat. Duis ultrices fermentum enim. Ut nec magna vestibulum, porttitor libero ut, euismod nulla. Nunc dignissim sagittis odio, sit amet pulvinar odio tempor sit amet.',
          gender: 'men',
          color: 'yellow',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
      ],
    },
    {
      categoryTitle: 'Shoes',
      items: [
        {
          _id: uuid(),
          name: 'Odissea Trainers',
          previewPath: 'img/products/men/shoes/01/preview.jpg',
          imagePaths: [
            'img/products/men/shoes/01/01.jpg',
            'img/products/men/shoes/01/02.jpg',
            'img/products/men/shoes/01/03.jpg',
            'img/products/men/shoes/01/04.jpg',
          ],
          price: 690,
          description:
            'Donec faucibus bibendum velit vitae viverra. Nulla ut aliquam tortor, ut laoreet velit. Donec nec sodales ex. Etiam venenatis magna nec libero convallis tincidunt.',
          gender: 'men',
          color: 'white',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
        {
          _id: uuid(),
          name: 'Greca Labyrinth Trainers',
          previewPath: 'img/products/men/shoes/02/preview.jpg',
          imagePaths: [
            'img/products/men/shoes/02/01.jpg',
            'img/products/men/shoes/02/02.jpg',
            'img/products/men/shoes/02/03.jpg',
            'img/products/men/shoes/02/04.jpg',
          ],
          price: 690,
          description:
            'Praesent tristique purus id ante consequat gravida. Fusce porta viverra leo, non efficitur urna tristique et. Cras lorem arcu, vulputate vitae diam a.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },

        {
          _id: uuid(),
          name: 'Column Derby Shoe',
          previewPath: 'img/products/men/shoes/03/preview.jpg',
          imagePaths: [
            'img/products/men/shoes/03/01.jpg',
            'img/products/men/shoes/03/02.jpg',
            'img/products/men/shoes/03/03.jpg',
            'img/products/men/shoes/03/04.jpg',
          ],
          price: 890,
          description:
            'Sed dignissim risus non elit dictum, quis feugiat mauris maximus. Mauris bibendum magna vitae eros porttitor condimentum. Vivamus fringilla convallis dolor eu dictum.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
        {
          _id: uuid(),
          name: 'Barocco Column Derby Shoe',
          previewPath: 'img/products/men/shoes/04/preview.jpg',
          imagePaths: [
            'img/products/men/shoes/04/01.jpg',
            'img/products/men/shoes/04/02.jpg',
            'img/products/men/shoes/04/03.jpg',
            'img/products/men/shoes/04/04.jpg',
          ],
          price: 890,
          description:
            'Cras feugiat, nisi nec tristique accumsan, massa dui hendrerit sapien, ut tempus dui ex ac tortor. Donec congue enim eu metus eleifend ultricies.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
      ],
    },
    {
      categoryTitle: 'Denim',
      items: [
        {
          _id: uuid(),
          name: 'Sleeveless Denim Jacket',
          previewPath: 'img/products/men/denim/01/preview.jpg',
          imagePaths: [
            'img/products/men/denim/01/01.jpg',
            'img/products/men/denim/01/02.jpg',
            'img/products/men/denim/01/03.jpg',
          ],
          price: 58,
          description:
            'Mauris vitae lectus sed nulla tempus condimentum. Nulla quis placerat diam, non porta nisi. Vivamus eu tortor vel dolor iaculis sollicitudin. Ut porta id arcu sed scelerisque.',
          gender: 'men',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },

        {
          _id: uuid(),
          name: 'Denim Jacket',
          previewPath: 'img/products/men/denim/02/preview.jpg',
          imagePaths: [
            'img/products/men/denim/02/01.jpg',
            'img/products/men/denim/02/02.jpg',
            'img/products/men/denim/02/03.jpg',
          ],
          price: 80,
          description:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent porta rhoncus dolor.',
          gender: 'men',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },
        {
          _id: uuid(),
          name: 'Light Blue Jeans',
          previewPath: 'img/products/men/denim/03/preview.jpg',
          imagePaths: [
            'img/products/men/denim/03/01.jpg',
            'img/products/men/denim/03/02.jpg',
            'img/products/men/denim/03/03.jpg',
          ],
          price: 56,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nunc sed massa scelerisque, nec posuere est maximus. Phasellus felis tellus, tincidunt.',
          gender: 'men',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },

        {
          _id: uuid(),
          name: 'Sleeveless Denim Jacket with Tear',
          previewPath: 'img/products/men/denim/04/preview.jpg',
          imagePaths: [
            'img/products/men/denim/04/01.jpg',
            'img/products/men/denim/04/02.jpg',
          ],
          price: 56,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nunc sed massa scelerisque, nec posuere est maximus. Phasellus felis tellus, tincidunt.',
          gender: 'men',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },
      ],
    },
    {
      categoryTitle: 'Jackets',
      items: [
        {
          _id: uuid(),
          name: 'Colorful Jacket',
          previewPath: 'img/products/men/jackets/01/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/01/01.jpg',
            'img/products/men/jackets/01/02.jpg',
            'img/products/men/jackets/01/03.jpg',
          ],
          price: 92,
          description:
            'Mauris interdum nunc quis sem pellentesque, nec ornare arcu efficitur. Mauris eu pharetra leo. Sed metus neque, imperdiet vel sapien vel, pulvinar mollis turpis.',
          gender: 'men',
          color: 'colorful',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
        {
          _id: uuid(),
          name: 'Brown Bomber Jacket',
          previewPath: 'img/products/men/jackets/02/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/02/01.jpg',
            'img/products/men/jackets/02/02.jpg',
          ],
          price: 98,
          description:
            'Nulla non ex sed risus eleifend volutpat et vitae dui. Curabitur ultricies augue justo, nec ultricies nisl tempus quis. Maecenas vel eros pellentesque, pretium ante sit amet, elementum lacus.',
          gender: 'men',
          color: 'brown',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },

        {
          _id: uuid(),
          name: 'Brown Shirt Jacket',
          previewPath: 'img/products/men/jackets/03/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/03/01.jpg',
            'img/products/men/jackets/03/02.jpg',
            'img/products/men/jackets/03/03.jpg',
          ],
          price: 80,
          description:
            'Vestibulum viverra orci et suscipit lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          gender: 'men',
          color: 'brown',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
        {
          _id: uuid(),
          name: 'Yellow Bomber Jacket',
          previewPath: 'img/products/men/jackets/04/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/04/01.jpg',
            'img/products/men/jackets/04/02.jpg',
          ],
          price: 102,
          description:
            'Suspendisse varius dolor mauris, dignissim elementum ante viverra sed. Curabitur lacinia luctus consectetur. Vivamus aliquet a diam vel viverra.',
          gender: 'men',
          color: 'yellow',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
        {
          _id: uuid(),
          name: 'Black Bomber Jacket with White Stripes',
          previewPath: 'img/products/men/jackets/05/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/05/01.jpg',
            'img/products/men/jackets/05/02.jpg',
            'img/products/men/jackets/05/03.jpg',
          ],
          price: 85,
          description:
            'Proin vitae odio pellentesque, auctor neque at, porttitor sapien. In non eros vehicula, facilisis nulla a, maximus ligula.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },

        {
          _id: uuid(),
          name: 'Blue and Purple Bomber Jacket',
          previewPath: 'img/products/men/jackets/06/preview.jpg',
          imagePaths: [
            'img/products/men/jackets/06/01.jpg',
            'img/products/men/jackets/06/02.jpg',
            'img/products/men/jackets/06/03.jpg',
          ],
          price: 85,
          description:
            'Aenean quis aliquet felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis quam tellus, ac efficitur risus aliquam eu.',
          gender: 'men',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
      ],
    },
    {
      categoryTitle: 'Shirts and Blouses',
      items: [
        {
          _id: uuid(),
          name: 'White Shirt',
          previewPath: 'img/products/men/shirts/01/preview.jpg',
          imagePaths: [
            'img/products/men/shirts/01/01.jpg',
            'img/products/men/shirts/01/02.jpg',
            'img/products/men/shirts/01/03.jpg',
          ],
          price: 30,
          description: '',
          gender: 'men',
          color: 'white',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
        {
          _id: uuid(),
          name: 'Light Blue Shirt',
          previewPath: 'img/products/men/shirts/02/preview.jpg',
          imagePaths: [
            'img/products/men/shirts/02/01.jpg',
            'img/products/men/shirts/02/02.jpg',
            'img/products/men/shirts/02/03.jpg',
          ],
          price: 35,
          description: '',
          gender: 'men',
          color: 'light-blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },

        {
          _id: uuid(),
          name: 'Cream Shirt',
          previewPath: 'img/products/men/shirts/04/preview.jpg',
          imagePaths: [
            'img/products/men/shirts/04/01.jpg',
            'img/products/men/shirts/04/02.jpg',
            'img/products/men/shirts/04/03.jpg',
          ],
          price: 35,
          description: '',
          gender: 'men',
          color: 'cream',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
        {
          _id: uuid(),
          name: 'White Blue Official Shirt',
          previewPath: 'img/products/men/shirts/03/preview.jpg',
          imagePaths: [
            'img/products/men/shirts/03/01.jpg',
            'img/products/men/shirts/03/02.jpg',
            'img/products/men/shirts/03/03.jpg',
          ],
          price: 40,
          description: '',
          gender: 'men',
          color: 'white',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },

        {
          _id: uuid(),
          name: 'Colorful Shirt',
          previewPath: 'img/products/men/shirts/05/preview.jpg',
          imagePaths: [
            'img/products/men/shirts/05/01.jpg',
            'img/products/men/shirts/05/02.jpg',
            'img/products/men/shirts/05/03.jpg',
          ],
          price: 42,
          description: '',
          gender: 'men',
          color: 'colorful',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
      ],
    },
    {
      categoryTitle: 'Suits and Blazers',
      items: [
        {
          _id: uuid(),
          name: 'Dark Blue Suit',
          previewPath: 'img/products/men/suits/01/preview.jpg',
          imagePaths: [
            'img/products/men/suits/01/01.jpg',
            'img/products/men/suits/01/02.jpg',
            'img/products/men/suits/01/03.jpg',
          ],
          price: 280,
          description:
            'Etiam sed ultricies lectus, at gravida enim. Praesent ullamcorper, enim sit amet feugiat mollis, leo ligula maximus arcu, nec ultrices metus augue sed ipsum.',
          gender: 'men',
          color: 'dark-blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },

        {
          _id: uuid(),
          name: 'Light Blue Blazer',
          previewPath: 'img/products/men/suits/02/preview.jpg',
          imagePaths: [
            'img/products/men/suits/02/01.jpg',
            'img/products/men/suits/02/02.jpg',
            'img/products/men/suits/02/03.jpg',
          ],
          price: 160,
          description:
            'Donec rutrum lacinia consequat. In ultricies ex dolor, nec efficitur diam iaculis eu. Cras ornare, nunc efficitur pellentesque ultrices, quam odio tincidunt magna, id semper magna dui nec magna.',
          gender: 'men',
          color: 'light-blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
        {
          _id: uuid(),
          name: 'Bordeaux Blazer',
          previewPath: 'img/products/men/suits/03/preview.jpg',
          imagePaths: [
            'img/products/men/suits/03/01.jpg',
            'img/products/men/suits/03/02.jpg',
          ],
          price: 180,
          description:
            'Ut congue lectus nulla, id elementum diam luctus ac. Praesent elementum vel urna eu fringilla. Duis vestibulum turpis in nibh vestibulum porta.',
          gender: 'men',
          color: 'bordeaux',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },

        {
          _id: uuid(),
          name: 'Black Blazer',
          previewPath: 'img/products/men/suits/04/preview.jpg',
          imagePaths: [
            'img/products/men/suits/04/01.jpg',
            'img/products/men/suits/04/02.jpg',
            'img/products/men/suits/04/03.jpg',
          ],
          price: 120,
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque malesuada scelerisque nibh, eget hendrerit quam molestie quis.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
      ],
    },
    {
      categoryTitle: 'Sweatshirts and Sweaters',
      items: [
        {
          _id: uuid(),
          name: 'Black Sweatshirt',
          previewPath: 'img/products/men/sweatshirts/01/preview.jpg',
          imagePaths: [
            'img/products/men/sweatshirts/01/01.jpg',
            'img/products/men/sweatshirts/01/02.jpg',
          ],
          price: '40',
          description:
            'Fusce viverra purus massa, vel dignissim turpis consectetur non. Donec hendrerit tempus sollicitudin. Vivamus condimentum orci eget varius commodo.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'sweatshirts-and-sweaters',
        },
        {
          _id: uuid(),
          name: 'Yellow Sweatshirt',
          previewPath: 'img/products/men/sweatshirts/02/preview.jpg',
          imagePaths: [
            'img/products/men/sweatshirts/02/01.jpg',
            'img/products/men/sweatshirts/02/02.jpg',
            'img/products/men/sweatshirts/02/03.jpg',
          ],
          price: '38',
          description:
            'Donec hendrerit finibus purus ac placerat. Donec at lectus et magna consequat semper. In laoreet euismod nibh a eleifend. Mauris eu porttitor quam.',
          gender: 'men',
          color: 'yellow',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'sweatshirts-and-sweaters',
        },
      ],
    },
    {
      categoryTitle: 'T-Shirts',
      items: [
        {
          _id: uuid(),
          name: 'Black T-Shirt',
          previewPath: 'img/products/men/t-shirts/01/preview.jpg',
          imagePaths: [
            'img/products/men/t-shirts/01/01.jpg',
            'img/products/men/t-shirts/01/02.jpg',
          ],
          price: '25',
          description:
            'Praesent tortor nisi, pellentesque eu porta sed, finibus sed dolor. Aenean a luctus risus, ut bibendum mi. Ut rutrum enim ac lectus porttitor accumsan.',
          gender: 'men',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 't-shirts',
        },
        {
          _id: uuid(),
          name: 'Dark Gray T-Shirt',
          previewPath: 'img/products/men/t-shirts/02/preview.jpg',
          imagePaths: [
            'img/products/men/t-shirts/02/01.jpg',
            'img/products/men/t-shirts/02/02.jpg',
            'img/products/men/t-shirts/02/03.jpg',
          ],
          price: '24',
          description:
            'Nam sapien lectus, convallis a ligula non, pulvinar pharetra lectus. Integer semper faucibus fermentum. Nam ultrices tortor in ipsum malesuada consequat.',
          gender: 'men',
          color: 'gray',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 't-shirts',
        },
      ],
    },
    {
      categoryTitle: 'Tops',
      items: [],
    },
  ],
  women: [
    {
      categoryTitle: 'Hats',
      items: [
        {
          _id: uuid(),
          name: 'Bordeaux Brim with Black Strap',
          previewPath: 'img/products/women/hats/01/preview.jpg',
          imagePaths: [
            'img/products/women/hats/01/01.jpg',
            'img/products/women/hats/01/02.jpg',
          ],
          price: 14,
          description:
            'Vestibulum sed lorem ipsum. Phasellus sit amet imperdiet lacus, id vulputate mauris. Suspendisse non est metus. Donec sed faucibus erat. In eget accumsan diam, a euismod ante.',
          gender: 'women',
          color: 'bordeaux',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
        {
          _id: uuid(),
          name: 'Black Brim with Black Stripe',
          previewPath: 'img/products/women/hats/02/preview.jpg',
          imagePaths: [
            'img/products/women/hats/02/01.jpg',
            'img/products/women/hats/02/02.jpg',
            'img/products/women/hats/02/03.jpg',
          ],
          price: 25,
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc porta dolor lorem, et rutrum metus mattis at. Pellentesque viverra eros non mattis molestie.',
          gender: 'women',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'hats',
        },
      ],
    },
    {
      categoryTitle: 'Shoes',
      items: [
        {
          _id: uuid(),
          name: 'Odissea Trainers',
          previewPath: 'img/products/women/shoes/01/preview.jpg',
          imagePaths: [
            'img/products/women/shoes/01/01.jpg',
            'img/products/women/shoes/01/02.jpg',
            'img/products/women/shoes/01/03.jpg',
            'img/products/women/shoes/01/04.jpg',
          ],
          price: 690,
          description:
            'Nunc vestibulum aliquam quam, ut cursus erat. Ut sit amet auctor sem. Fusce vitae luctus nisl. Morbi vehicula sem lacus, vel convallis felis rutrum finibus.',
          gender: 'women',
          color: 'pink',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
        {
          _id: uuid(),
          name: 'Trigreca Trainers',
          previewPath: 'img/products/women/shoes/02/preview.jpg',
          imagePaths: [
            'img/products/women/shoes/02/01.jpg',
            'img/products/women/shoes/02/02.jpg',
            'img/products/women/shoes/02/03.jpg',
            'img/products/women/shoes/02/04.jpg',
          ],
          price: 780,
          description:
            'Cras augue ipsum, elementum et nisl eu, imperdiet sollicitudin nunc. Etiam sed nulla in leo auctor vestibulum. Maecenas pellentesque vestibulum erat, ut tempor purus gravida nec.',
          gender: 'women',
          color: 'pink',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
        {
          _id: uuid(),
          name: 'Medusa Biggie Sandals',
          previewPath: 'img/products/women/shoes/03/preview.jpg',
          imagePaths: [
            'img/products/women/shoes/03/01.jpg',
            'img/products/women/shoes/03/02.jpg',
            'img/products/women/shoes/03/03.jpg',
            'img/products/women/shoes/03/04.jpg',
          ],
          price: 790,
          description:
            'Aenean quis nibh quis nibh aliquet pellentesque at nec ante. Morbi vel sollicitudin ipsum. Morbi euismod nunc in leo tempor lobortis. Nunc viverra ante mauris.',
          gender: 'women',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
        {
          _id: uuid(),
          name: 'Medusa Biggie Mules',
          previewPath: 'img/products/women/shoes/04/preview.jpg',
          imagePaths: [
            'img/products/women/shoes/04/01.jpg',
            'img/products/women/shoes/04/02.jpg',
            'img/products/women/shoes/04/03.jpg',
            'img/products/women/shoes/04/04.jpg',
          ],
          price: 890,
          description:
            'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at accumsan felis, convallis consectetur purus.',
          gender: 'women',
          color: 'white',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shoes',
        },
      ],
    },
    {
      categoryTitle: 'Denim',
      items: [
        {
          _id: uuid(),
          name: 'America Jean Jacket',
          previewPath: 'img/products/women/denim/01/preview.jpg',
          imagePaths: [
            'img/products/women/denim/01/01.jpg',
            'img/products/women/denim/01/02.jpg',
          ],
          price: 90,
          description:
            'Quisque sollicitudin mi vitae erat interdum, at iaculis nibh euismod. Mauris elementum suscipit laoreet. Sed nec augue felis. Fusce sodales a nunc vel fringilla.',
          gender: 'women',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },
        {
          _id: uuid(),
          name: 'Slim Fit Jeans',
          previewPath: 'img/products/women/denim/02/preview.jpg',
          imagePaths: [
            'img/products/women/denim/02/01.jpg',
            'img/products/women/denim/02/02.jpg',
            'img/products/women/denim/02/03.jpg',
          ],
          price: 45,
          description:
            'Nulla consectetur, purus ut feugiat pulvinar, lorem quam porttitor quam, ultricies vestibulum nulla nisi vel augue. Vivamus laoreet dapibus facilisis.',
          gender: 'women',
          color: 'blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'denim',
        },
      ],
    },
    {
      categoryTitle: 'Jackets',
      items: [
        {
          _id: uuid(),
          name: 'Blood Red Jacket',
          previewPath: 'img/products/women/jackets/01/preview.jpg',
          imagePaths: [
            'img/products/women/jackets/01/01.jpg',
            'img/products/women/jackets/01/02.jpg',
          ],
          price: 88,
          description:
            'Suspendisse eleifend massa quis diam pulvinar, porttitor porta libero tempus. Nulla lobortis sem odio, sed finibus ex dignissim et. In hac habitasse platea dictumst.',
          gender: 'women',
          color: 'red',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
        {
          _id: uuid(),
          name: 'Black Leather Jacket',
          previewPath: 'img/products/women/jackets/02/preview.jpg',
          imagePaths: [
            'img/products/women/jackets/02/01.jpg',
            'img/products/women/jackets/02/02.jpg',
            'img/products/women/jackets/02/03.jpg',
          ],
          price: 85,
          description:
            'Donec erat lectus, congue sit amet orci scelerisque, iaculis sollicitudin diam. Nulla tellus nibh, viverra at justo at, placerat vestibulum sapien.',
          gender: 'women',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
        {
          _id: uuid(),
          name: 'Black Coat Jacket',
          previewPath: 'img/products/women/jackets/03/preview.jpg',
          imagePaths: [
            'img/products/women/jackets/03/01.jpg',
            'img/products/women/jackets/03/02.jpg',
            'img/products/women/jackets/03/03.jpg',
          ],
          price: 105,
          description:
            'Ut nisl nisl, imperdiet nec mauris nec, congue placerat orci. Aliquam bibendum, justo et blandit feugiat, neque risus luctus lectus, posuere placerat eros dui in nisi.',
          gender: 'women',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'jackets',
        },
      ],
    },
    {
      categoryTitle: 'Shirts and Blouses',
      items: [
        {
          _id: uuid(),
          name: 'White Shirt',
          previewPath: 'img/products/women/shirts/03/preview.jpg',
          imagePaths: [
            'img/products/women/shirts/03/01.jpg',
            'img/products/women/shirts/03/02.jpg',
            'img/products/women/shirts/03/03.jpg',
          ],
          price: 32,
          description: '',
          gender: 'women',
          color: 'white',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
        {
          _id: uuid(),
          name: 'Cream Shirt',
          previewPath: 'img/products/women/shirts/02/preview.jpg',
          imagePaths: [
            'img/products/women/shirts/02/01.jpg',
            'img/products/women/shirts/02/02.jpg',
          ],
          price: 35,
          description: '',
          gender: 'women',
          color: 'cream',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
        {
          _id: uuid(),
          name: 'Flashy Blouse',
          previewPath: 'img/products/women/shirts/01/preview.jpg',
          imagePaths: [
            'img/products/women/shirts/01/01.jpg',
            'img/products/women/shirts/01/02.jpg',
            'img/products/women/shirts/01/03.jpg',
          ],
          price: 32,
          description: '',
          gender: 'women',
          color: 'dark-blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'shirts-and-blouses',
        },
      ],
    },
    {
      categoryTitle: 'Suits and Blazers',
      items: [
        {
          _id: uuid(),
          name: 'Pink Slim Fit Suit',
          previewPath: 'img/products/women/suits/01/preview.jpg',
          imagePaths: [
            'img/products/women/suits/01/01.jpg',
            'img/products/women/suits/01/02.jpg',
            'img/products/women/suits/01/03.jpg',
          ],
          price: 300,
          description:
            'Etiam vitae hendrerit ante. Donec iaculis augue at massa mattis hendrerit. Vestibulum ut tortor eu urna facilisis dignissim vel eu lorem.',
          gender: 'women',
          color: 'pink',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
        {
          _id: uuid(),
          name: 'Gray Jacket with Pattern',
          previewPath: 'img/products/women/suits/02/preview.jpg',
          imagePaths: [
            'img/products/women/suits/02/01.jpg',
            'img/products/women/suits/02/02.jpg',
            'img/products/women/suits/02/03.jpg',
          ],
          price: 120,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget molestie arcu, dictum faucibus tortor. Pellentesque dictum purus justo, placerat porttitor nunc sagittis eget.',
          gender: 'women',
          color: 'gray',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
        {
          _id: uuid(),
          name: 'Black Jacket',
          previewPath: 'img/products/women/suits/03/preview.jpg',
          imagePaths: [
            'img/products/women/suits/03/01.jpg',
            'img/products/women/suits/03/02.jpg',
            'img/products/women/suits/03/03.jpg',
          ],
          price: 110,
          description:
            'Mauris enim enim, pulvinar finibus dictum ut, ultricies vitae arcu. Fusce in commodo dolor. Cras sit amet nibh at metus sodales cursus nec et ante.',
          gender: 'women',
          color: 'black',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
        {
          _id: uuid(),
          name: 'Dark Blue Waistcoat with Stripes',
          previewPath: 'img/products/women/suits/04/preview.jpg',
          imagePaths: [
            'img/products/women/suits/04/01.jpg',
            'img/products/women/suits/04/02.jpg',
          ],
          price: 90,
          description:
            'Donec in mattis mi, vel gravida lorem. Maecenas non commodo mi. Donec nulla mi, dictum et nisi vitae, hendrerit pharetra lorem. Ut in mauris et velit ultricies vestibulum.',
          gender: 'women',
          color: 'dark-blue',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'suits-and-blazers',
        },
      ],
    },
    {
      categoryTitle: 'Sweatshirts and Sweaters',
      items: [
        {
          _id: uuid(),
          name: 'Red Sweatshirt',
          previewPath: 'img/products/women/sweatshirts/01/preview.jpg',
          imagePaths: [
            'img/products/women/sweatshirts/01/01.jpg',
            'img/products/women/sweatshirts/01/02.jpg',
            'img/products/women/sweatshirts/01/03.jpg',
          ],
          price: '36',
          description:
            'Nunc eget pretium dolor, at sollicitudin est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse rutrum consectetur sem.',
          gender: 'women',
          color: 'red',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'sweatshirts-and-sweaters',
        },
        {
          _id: uuid(),
          name: 'Yellow Sweater',
          previewPath: 'img/products/women/sweaters/01/preview.jpg',
          imagePaths: [
            'img/products/women/sweaters/01/01.jpg',
            'img/products/women/sweaters/01/02.jpg',
            'img/products/women/sweaters/01/03.jpg',
            'img/products/women/sweaters/01/04.jpg',
          ],
          price: '50',
          description:
            'Quisque egestas metus non lectus vehicula, eget ornare nisl laoreet. Vivamus bibendum erat at turpis semper, sit amet maximus nisi aliquam.',
          gender: 'women',
          color: 'yellow',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'sweatshirts-and-sweaters',
        },
      ],
    },
    {
      categoryTitle: 'T-Shirts',
      items: [],
    },
    {
      categoryTitle: 'Tops',
      items: [
        {
          _id: uuid(),
          name: 'Flashy Top',
          previewPath: 'img/products/women/tops/01/preview.jpg',
          imagePaths: [
            'img/products/women/tops/01/01.jpg',
            'img/products/women/tops/01/02.jpg',
            'img/products/women/tops/01/03.jpg',
          ],
          price: '32',
          description:
            'Fusce at dui ac sapien pretium egestas nec vel nulla. Mauris et luctus risus. Nam eget metus nisl. Praesent sodales lacus sit amet arcu mattis rhoncus.',
          gender: 'women',
          color: 'silver',
          quantityInStock: {
            s: 3,
            m: 5,
            l: 2,
          },
          category: 'tops',
        },
      ],
    },
  ],
};

export default SHOP_DATA;

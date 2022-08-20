import { ReactComponent as ChevronLeftIcon } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from './assets/chevron-right.svg';

import './Carousel.scss';
import CarouselImage from './CarouselImage';

const Carousel = ({ imagePaths }) => {
  const imgPaths = imagePaths.slice(0, 10);

  return (
    <div className='slider-wrapper'>
      {imgPaths.map((imagePath, i) => (
        <input
          key={i}
          id={`slide${i + 1}`}
          name='slides'
          type='radio'
          {...(i === 0 && { defaultChecked: true })}
        />
      ))}
      <div className='slider-arrow-nav'>
        {imgPaths.map((imagePath, i) => (
          <label
            key={i + 10}
            className='nav-arrow prev'
            htmlFor={`slide${i + 1}`}
          >
            <ChevronLeftIcon />
          </label>
        ))}
      </div>
      <div className='slider-arrow-nav'>
        {imgPaths.map((imagePath, i) => (
          <label
            key={i + 20}
            className='nav-arrow next'
            htmlFor={`slide${i + 1}`}
          >
            <ChevronRightIcon />
          </label>
        ))}
      </div>
      <div className='slider-nav'>
        {imgPaths.map((imagePath, i) => (
          <label
            key={i + 30}
            className='nav-button'
            htmlFor={`slide${i + 1}`}
          ></label>
        ))}
      </div>
      <div className='slider-content'>
        {imgPaths.map((imagePath, i) => {
          console.log(imagePath);
          return (
            <div key={i + 40} className={`slide slide${i + 1}`}>
              <CarouselImage imagePath={imagePath} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

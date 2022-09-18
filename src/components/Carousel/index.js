import { ReactComponent as ChevronLeftIcon } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from './assets/chevron-right.svg';

import './styles.scss';
import CarouselImage from './CarouselImage';

const Carousel = ({ imageUrls }) => {
  const imgUrls = imageUrls.slice(0, 10);

  return (
    <div className='slider-wrapper'>
      {imgUrls.map((imageUrl, i) => (
        <input
          key={i}
          id={`slide${i + 1}`}
          name='slides'
          type='radio'
          {...(i === 0 && { defaultChecked: true })}
        />
      ))}
      <div className='slider-arrow-nav'>
        {imgUrls.map((imageUrl, i) => (
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
        {imgUrls.map((imageUrl, i) => (
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
        {imgUrls.map((imageUrl, i) => (
          <label
            key={i + 30}
            className='nav-button'
            htmlFor={`slide${i + 1}`}
          ></label>
        ))}
      </div>
      <div className='slider-content'>
        {imgUrls.map((imageUrl, i) => {
          return (
            <div key={i + 40} className={`slide slide${i + 1}`}>
              <CarouselImage imageUrl={imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

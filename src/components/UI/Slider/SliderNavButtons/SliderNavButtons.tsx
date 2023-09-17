import { useAppSelector } from '@/hooks/redux';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/Arrow Icon.svg';

interface SliderNavButtonsProps {
  handleSlidePrev: () => void;
  handleNavButtonNext: () => void;
  lastSlide: boolean;
  firstSlide: boolean;
}

const SliderNavButtons: React.FC<SliderNavButtonsProps> = ({
  handleSlidePrev,
  handleNavButtonNext,
  lastSlide,
  firstSlide
}) => {
  return (
    <div className='slider-nav'>
      <button
        disabled={firstSlide}
        type='button'
        className={`slider-nav__btn ${firstSlide ? 'disabled' : ''} prev`}
        onClick={handleSlidePrev}>
        <ArrowIcon />
      </button>
      <button
        disabled={lastSlide}
        type='button'
        className={`slider-nav__btn ${lastSlide ? 'disabled' : ''} next`}
        onClick={handleNavButtonNext}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default SliderNavButtons;
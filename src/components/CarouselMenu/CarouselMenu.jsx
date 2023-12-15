import NextIcon from '../Icons/NextIcon';
import PreviewIcon from '../Icons/PreviewIcon';
import styles from './CarouselMenu.module.css';
import PropTypes from 'prop-types';

const CarouselMenu = ({ onPrev, onNext }) => {
  return (
    <div className={styles.carouselContainer}>
      <PreviewIcon onClick={onPrev} />
      <NextIcon onClick={onNext} />
    </div>
  );
};

CarouselMenu.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default CarouselMenu;
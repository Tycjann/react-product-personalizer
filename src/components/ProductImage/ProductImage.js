import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({ name, alt , currentColor}) => {

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={alt}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
    </div>
  );

};

ProductImage.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired
}

export default ProductImage;
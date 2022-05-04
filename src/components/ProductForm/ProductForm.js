import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        changeSize={props.changeSize}
        />

      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        changeColor={props.changeColor}
        colorClassName={props.colorClassName}
      />
      
      <Button className={styles.button} productId={props.id} addToCard={props.addToCard}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  colors: PropTypes.array.isRequired,
  changeColor: PropTypes.func.isRequired,
  colorClassName: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  changeSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired
}

export default ProductForm;
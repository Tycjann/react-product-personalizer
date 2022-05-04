import styles from './Product.module.scss';
import clsx from 'clsx';
import {useState} from 'react';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage'
// import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const colorClassName = (color) => {
    return 'color' + color[0].toUpperCase(1) + color.substring(1);
  };

  const changeColor = e => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  };

  const changeSize = e => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const getPrice = () => {
    const found = props.sizes.find(element => element.name === currentSize);
    return props.basePrice + found.additionalPrice;
  }

  const addToCard = e => {
    e.preventDefault();
    console.log(
      'Summary:',
      '==================:',
      '\nName:', props.name,
      '\nPrice:', getPrice(),
      '\nSize:', currentSize,
      '\nColor:', currentColor,
      );
  };
  
  return (
    <article className={styles.product}>
      <ProductImage 
        name={props.name} 
        alt={props.title} 
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {
                props.sizes.map(propsSize => 
                  <li key={propsSize.name}> 
                  <button 
                    type="button" 
                    className={clsx(propsSize.name === currentSize && styles.active)} 
                    onClick={changeSize} 
                    value={propsSize.name} > {propsSize.name} </button></li>
                )
              }
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {
                props.colors.map(propsColor =>
                  <li key={propsColor}>
                    <button 
                      type="button" 
                      className={clsx(styles[colorClassName(propsColor)], propsColor === currentColor && styles.active)}
                      value={propsColor}
                      onClick={changeColor}
                      /></li>
                )
              }
            </ul>
          </div>
          <Button className={styles.button} productId={props.id} addToCard={addToCard}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

// Product.propTypes = { title: PropTypes.string.isRequired };

export default Product;
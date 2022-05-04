import styles from './Product.module.scss';
import {useState} from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage'

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
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          colorClassName={colorClassName}
          currentColor={currentColor}
          changeColor={changeColor}
          currentSize={currentSize}
          changeSize={changeSize}
          addToCard={addToCard}
        />
      </div>
    </article>
  )
};

export default Product;
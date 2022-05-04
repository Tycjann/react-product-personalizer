import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import { nanoid } from 'nanoid';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {
        products.map(product => <Product key={nanoid()} {...product} />)
      }
    </section>
  );
};

export default Products;
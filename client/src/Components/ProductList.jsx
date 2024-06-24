// Example Component

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.getProducts.products);
  const loading = useSelector(state => state.getProducts.loading);
  const error = useSelector(state => state.getProducts.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';
import { useProducts } from './useProducts';
import { IProduct } from '@/lib/types/product.types';

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <h1>Loading products...</h1>;
  }

  if (isError) {
    return <h1>Fail to load products...</h1>;
  }
  console.log(data);

  return (
    <div>
      {Array.isArray(data) &&
        data.map((product: IProduct) => {
          return (
            <div className="flex justify-between px-6">
              <p>{product._id}</p>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;

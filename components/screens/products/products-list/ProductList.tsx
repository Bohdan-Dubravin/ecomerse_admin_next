import React from 'react';
import { useProducts } from './useProducts';
import { IProduct } from '@/lib/types/product.types';
import styles from './productList.module.css';
const ProductList = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <h1>Loading products...</h1>;
  }

  if (isError) {
    return <h1>Fail to load products...</h1>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>id</td>

          <td>Name</td>

          <td>Description</td>

          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((product: IProduct) => {
            return (
              <>
                <tr className={styles.table__row}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                </tr>
                <tr className="h-3"></tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductList;

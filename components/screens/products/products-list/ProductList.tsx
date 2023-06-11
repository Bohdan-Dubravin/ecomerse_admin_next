import React from 'react';
import { useProducts } from './useProducts';
import { IProduct } from '@/lib/types/product.types';
import styles from './productList.module.css';
import Link from 'next/link';
import { HeroIcon } from '@/components/ui/hero-icon/Heroicon';
const ProductList = () => {
  const { data, isLoading, isError, onDelete } = useProducts();

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
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((product) => {
            return (
              <>
                <tr className={styles.table__row}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="flex justify-between w-fit">
                      <Link
                        className={styles.edit_btn}
                        href={`/products/edit/${product._id}`}
                      >
                        <HeroIcon className="w-5" icon="PencilSquareIcon" />
                        Edit
                      </Link>
                      <button
                        onClick={() => onDelete(product._id)}
                        className={styles.delete_btn}
                      >
                        <HeroIcon className="w-5" icon="TrashIcon" />
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="h-2"></tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductList;

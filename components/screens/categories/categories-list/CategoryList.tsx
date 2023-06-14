"use client";
import React from "react";
import { useCategories } from "./useCategories";
import styles from "./productList.module.css";
import Link from "next/link";
import { HeroIcon } from "@/components/ui/hero-icon/Heroicon";
import { twMerge } from "tailwind-merge";
const CategoryList = () => {
  const { data, isLoading, isError, onDelete } = useCategories();

  if (isLoading) {
    return <h1>Loading products...</h1>;
  }

  if (isError) {
    return <h1>Fail to load products...</h1>;
  }

  const deleteBtnStyle = twMerge(styles.delete_btn, "group");
  const editBtnStyle = twMerge(styles.edit_btn, "group");
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.table__head}>
            <th className={styles.first__th}>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th className={styles.last__th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product) => {
              return (
                <tr key={product._id} className={styles.table__row}>
                  <td className="pl-4">{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td className={styles.lastRow}>
                    <div className="flex justify-center">
                      <Link
                        className={editBtnStyle}
                        href={`/products/edit/${product._id}`}
                      >
                        <HeroIcon
                          className="w-5 group-hover:text-blue-600"
                          icon="PencilSquareIcon"
                        />
                        Edit
                      </Link>
                      <button
                        onClick={() => onDelete(product._id)}
                        className={deleteBtnStyle}
                      >
                        <HeroIcon
                          className="w-5 group-hover:text-red-600"
                          icon="TrashIcon"
                        />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;

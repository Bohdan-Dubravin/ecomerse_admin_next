import { IProduct } from "@/lib/types/product.types";

export interface IProductEditInput extends Omit<IProduct, "_id"> {}

import { ICategory } from "@/lib/types/category.types";

export interface ICategoryEditInput extends Omit<ICategory, "_id"> {}

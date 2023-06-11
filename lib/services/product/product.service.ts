import { IProductEditInput } from '@/components/screens/products/product-form/product-edit.interface';
import $api from '@/lib/api/insterceptors';
import { IProduct } from '@/lib/types/product.types';

export const ProductService = {
  async getProducts() {
    return $api.get<IProduct[]>('/products');
  },

  async getProductById(id: string) {
    return $api.get<IProductEditInput>(`/products/${id}`);
  },

  async create(data: IProductEditInput) {
    return $api.post<string>('/products/create', data);
  },

  async update(id: string, data: IProductEditInput) {
    return $api.patch<string>(`/products/edit/${id}`, data);
  },

  async delete(id: string) {
    return $api.delete<string>(`/products/delete/${id}`);
  },

  // async getAll(searchTerm?: string) {
  // 	return axiosClassic.get<IActor[]>(getActorsUrl(``), {
  // 		params: searchTerm
  // 			? {
  // 					searchTerm,
  // 			  }
  // 			: {},
  // 	})
  // },

  // async getById(_id: string) {
  // 	return $axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
  // },
};

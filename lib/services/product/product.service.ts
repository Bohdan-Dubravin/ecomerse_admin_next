import { IProductEditInput } from "@/components/screens/products/product-form/product-edit.interface";
import $api from "@/lib/api/interesptors";

export const ProductService = {
  // async getBySlug(slug: string) {
  // 	return axiosClassic.get<IActor>(getActorsUrl(`/slug/${slug}`))
  // },

  // async create() {
  // 	return $api.post<string>(getActorsUrl(''))
  // },
  async create(data: IProductEditInput) {
    return $api.post<string>("/products/new", data);
  },

  // async update(data: IProductEditInput) {
  //   return $api.patch<string>("/products/new", data);
  // },

  // async delete(_id: string) {
  // 	return $axios.delete<string>(getActorsUrl(`/${_id}`))
  // },

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

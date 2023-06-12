import $api from "@/lib/api/insterceptors";
import { IProduct } from "@/lib/types/product.types";

export const FileService = {
  async upload(file: FormData, id: string) {
    const response = await $api.post<{ secure_url: string }>(
      "https://api.cloudinary.com/v1_1/depaahcxg/image/upload",
      file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return this.addImgUrlToDb(response.data.secure_url, id);
  },
  async addImgUrlToDb(imgUrl: string, id: string) {
    const response = await $api.patch<IProduct>(`/upload/${id}`, imgUrl);
    return response;
  },
};

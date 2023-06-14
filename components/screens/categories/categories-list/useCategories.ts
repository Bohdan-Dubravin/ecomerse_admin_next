import { useMutation, useQuery, useQueryClient } from "react-query";

import { ProductService } from "@/lib/services/product/product.service";
import { $toast } from "@/lib/utils/toast";
import { errorCatch } from "@/lib/api/errorCatch";

export const useCategories = () => {
  const queryClient = useQueryClient();
  const productsData = useQuery(
    "products",
    () => ProductService.getProducts(),
    {
      select: ({ data }) => {
        return data;
      },
      onError(error) {
        // toastError(error, 'Get actor')
      },
    }
  );

  const deleteProduct = useMutation(
    "delete product",
    (id: string) => ProductService.delete(id),
    {
      onError(error) {
        $toast.error(errorCatch(error));
      },
      onSuccess() {
        $toast.success("Product deleted");

        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    }
  );

  const onDelete = async (id: string) => {
    await deleteProduct.mutateAsync(id);
  };

  return { ...productsData, onDelete };
};

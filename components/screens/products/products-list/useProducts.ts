import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { toastr } from 'react-redux-toastr'

import { ProductService } from '@/lib/services/product/product.service';
import { $toast } from '@/lib/utils/toast';
import { errorCatch } from '@/lib/api/errorCatch';

// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { getKeys } from '@/utils/object/getKeys'

// import { IActorEditInput } from './actor-edit.interface'

export const useProducts = () => {
  const queryClient = useQueryClient();
  const productsData = useQuery(
    'products',
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
    'delete product',
    (id: string) => ProductService.delete(id),
    {
      onError(error) {
        $toast.error(errorCatch(error));
      },
      onSuccess() {
        $toast.success('Product deleted');

        queryClient.invalidateQueries({ queryKey: ['products'] });
      },
    }
  );

  const onDelete = async (id: string) => {
    await deleteProduct.mutateAsync(id);
  };

  return { ...productsData, onDelete };
};

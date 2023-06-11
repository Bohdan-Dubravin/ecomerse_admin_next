import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { toastr } from 'react-redux-toastr'

import { IProductEditInput } from './product-edit.interface';
import { ProductService } from '@/lib/services/product/product.service';
import { getKeys } from '@/lib/utils/getKeys';
import { $toast } from '@/lib/utils/toast';
import { errorCatch } from '@/lib/api/errorCatch';

// import { toastError } from '@/utils/api/withToastrErrorRedux'

// import { IActorEditInput } from './actor-edit.interface'

export const useProductForm = (
  setValue: UseFormSetValue<IProductEditInput>
) => {
  const { query, push } = useRouter();
  const queryClient = useQueryClient();
  const productId = String(query.id);

  const { isLoading } = useQuery(
    ['productById', productId],
    () => ProductService.getProductById(productId),
    {
      onSuccess({ data }) {
        getKeys(data).forEach((key) => {
          setValue(key, data[key]);
        });
      },
      onError(error) {
        $toast.error('Error');
      },
    }
  );

  const createProduct = useMutation(
    'create product',
    (data: IProductEditInput) => ProductService.create(data),
    {
      onError(error) {
        $toast.error(errorCatch(error));
      },
      onSuccess() {
        $toast.success('Product created');
        push('/products');
        queryClient.invalidateQueries({ queryKey: ['products'] });
      },
    }
  );

  const updateProduct = useMutation(
    'update product',
    (data: IProductEditInput) => ProductService.update(productId, data),
    {
      onError(error) {
        $toast.error(errorCatch(error));
      },
      onSuccess() {
        $toast.success('Product updated');
        push('/products');
        queryClient.invalidateQueries({ queryKey: ['products'] });
      },
    }
  );

  const onSubmit: SubmitHandler<IProductEditInput> = async (data) => {
    await createProduct.mutateAsync(data);
  };

  const onEdit: SubmitHandler<IProductEditInput> = async (data) => {
    await updateProduct.mutateAsync(data);
  };

  return { onSubmit, isLoading, onEdit };
};

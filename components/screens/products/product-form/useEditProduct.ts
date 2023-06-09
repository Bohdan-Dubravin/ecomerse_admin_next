import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { toastr } from 'react-redux-toastr'

import { IProductEditInput } from './product-edit.interface';
import { ProductService } from '@/lib/services/product/product.service';

// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { getKeys } from '@/utils/object/getKeys'

// import { IActorEditInput } from './actor-edit.interface'

export const useProductEdit = (
  setValue: UseFormSetValue<IProductEditInput>
) => {
  const { query, push } = useRouter();
  const queryClient = useQueryClient();
  // const actorId = String(query.id);

  const { isLoading } = useQuery(
    'products',
    () => ProductService.getProducts(),
    {
      onSuccess({ data }) {
        // getKeys(data).forEach((key) => {
        // 	setValue(key, data[key])
        // })
      },
      onError(error) {
        // toastError(error, 'Get actor')
      },
    }
  );

  const { mutateAsync } = useMutation(
    'update product',
    (data: IProductEditInput) => ProductService.create(data),
    {
      // 	onError(error) {
      // 		toastError(error, 'Update actor')
      // 	},
      onSuccess() {
        // toastr.success('Update actor', 'update was successful')
        push('/products');
        queryClient.invalidateQueries({ queryKey: ['products'] });
      },
    }
  );

  const onSubmit: SubmitHandler<IProductEditInput> = async (data) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};

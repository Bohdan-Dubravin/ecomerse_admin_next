import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
// import { toastr } from 'react-redux-toastr'

import { ProductService } from '@/lib/services/product/product.service';

// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { getKeys } from '@/utils/object/getKeys'

// import { IActorEditInput } from './actor-edit.interface'

export const useProducts = () => {
  const { query, push } = useRouter();

  // const actorId = String(query.id);

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

  return { ...productsData };
};

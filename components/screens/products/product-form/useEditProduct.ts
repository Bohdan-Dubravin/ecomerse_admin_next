import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
// import { toastr } from 'react-redux-toastr'

import { IProductEditInput } from "./product-edit.interface";
import { ProductService } from "@/lib/services/product/product.service";

// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { getKeys } from '@/utils/object/getKeys'

// import { IActorEditInput } from './actor-edit.interface'

export const useProductEdit = (
  setValue: UseFormSetValue<IProductEditInput>
) => {
  const { query, push } = useRouter();

  // const actorId = String(query.id);

  // const { isLoading } = useQuery(
  //   ["product", actorId],
  //   () => ProductService.getById(actorId)
  //   // {
  // 	onSuccess({ data }) {
  // 		getKeys(data).forEach((key) => {
  // 			setValue(key, data[key])
  // 		})
  // 	},
  // 	onError(error) {
  // 		toastError(error, 'Get actor')
  // 	},
  // 	enabled: !!query.id,
  // }
  // );

  const { mutateAsync, isLoading } = useMutation(
    "update product",
    (data: IProductEditInput) => ProductService.update(data)
    // {
    // 	onError(error) {
    // 		toastError(error, 'Update actor')
    // 	},
    // 	onSuccess() {
    // 		toastr.success('Update actor', 'update was successful')
    // 		push(getAdminUrl('actors'))
    // 	},
    // }
  );

  const onSubmit: SubmitHandler<IProductEditInput> = async (data) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};

import InputField from '@/components/ui/input/Input';
import { useForm } from 'react-hook-form';
import { IProductEditInput } from './product-edit.interface';
import { useProductEdit } from './useEditProduct';

const ProductForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IProductEditInput>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useProductEdit(setValue);

  return (
    <div className="bg-white p-8 rounded-xl w-fit m-8">
      {isLoading && <h1>Load new product...</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register('title', {
            required: 'title is required!',
          })}
          placeholder="title"
          label="Title"
          error={errors.title}
        />
        <InputField
          {...register('description', {
            required: 'description is required!',
          })}
          placeholder="description"
          label="Description"
          error={errors.description}
        />
        <InputField
          {...register('price', {
            required: 'price is required!',
          })}
          placeholder="price"
          label="Price"
          type="number"
          error={errors.price}
        />
        <button>add</button>
      </form>
    </div>
  );
};
export default ProductForm;

import InputField from '@/components/ui/input/Input';
import { Controller, useForm } from 'react-hook-form';
import { IProductEditInput } from './product-edit.interface';
import { useProductForm } from './useProductForm';
import UploadField from '@/components/ui/input/upload-input/UploadField';

const ProductForm = ({ isEdit = false }) => {
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

  const { isLoading, onSubmit, onEdit } = useProductForm(setValue);

  return (
    <div className="bg-white p-8 rounded-xl w-fit m-8">
      <h1>{isEdit ? 'Edit product' : 'New product'}</h1>
      <form onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)}>
        <InputField
          {...register('title', {
            required: 'title is required!',
          })}
          placeholder="title"
          label="Title"
          error={errors.title}
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
        <Controller
          name="images"
          control={control}
          defaultValue={['']}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <UploadField
              placeholder="Upload"
              error={error}
              folder="products"
              image={value[0]}
              onChange={onChange}
            />
          )}
          rules={{}}
        />
        <InputField
          {...register('description', {
            required: 'description is required!',
          })}
          placeholder="description"
          label="Description"
          error={errors.description}
        />
        <button>{isEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};
export default ProductForm;

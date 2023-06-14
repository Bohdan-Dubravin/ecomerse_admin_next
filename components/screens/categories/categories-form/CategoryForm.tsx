import InputField from "@/components/ui/input-fields/Input";
import { Controller, useForm } from "react-hook-form";
import {
  ICategoryEditInput,
  IProductEditInput,
} from "./product-edit.interface";
import { useCategoryForm } from "./useCategoryForm";
import UploadField from "@/components/ui/input-fields/upload-input/UploadField";
import MainButton from "@/components/ui/main-button/MainButton";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";

const CategoryForm = ({ isEdit = false }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<ICategoryEditInput>({
    mode: "onChange",
  });

  const { isLoading, onSubmit, onEdit } = useCategoryForm(setValue);
  // const [currentImages, setCurrentImages] = useState(getValues("images"));

  // useEffect(() => {
  //   setValue("images", currentImages);
  // }, [currentImages]);

  return (
    <div className="bg-white p-8  rounded-xl  m-8">
      <h1>{isEdit ? "Edit product" : "New product"}</h1>
      <form onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)}>
        <InputField
          {...register("name", {
            required: "name is required!",
          })}
          placeholder="name"
          label="Name"
          error={errors.name}
        />

        <InputField
          {...register("price", {
            required: "price is required!",
          })}
          placeholder="price"
          label="Price"
          type="number"
          error={errors.price}
        />
        <Controller
          name="images"
          control={control}
          defaultValue={[""]}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <UploadField
              placeholder="Upload"
              error={error}
              images={value}
              setCurrentImages={setCurrentImages}
            />
          )}
          rules={{}}
        />
        <InputField
          {...register("description", {
            required: "description is required!",
          })}
          placeholder="description"
          label="Description"
          error={errors.description}
        />

        <MainButton className="my-4" type="submit">
          {isLoading ? (
            <ClipLoader color="#000000" />
          ) : isEdit ? (
            "Update"
          ) : (
            "Create"
          )}
        </MainButton>
      </form>
    </div>
  );
};
export default CategoryForm;

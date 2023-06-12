import { errorCatch } from "@/lib/api/errorCatch";
import { FileService } from "@/lib/services/file/file.service";
import { $toast } from "@/lib/utils/toast";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useMutation } from "react-query";

type TypeUpload = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  isLoading: boolean;
};

export const useUpload: TypeUpload = (useImgList) => {
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();
  const productId = String(query.id);
  const { mutateAsync } = useMutation(
    "upload file",
    (data: FormData) => FileService.upload(data, productId),
    {
      onSuccess({ data }) {
        console.log(data);
        useImgList(...data.images);
        console.log(data);
        $toast.success("Image uploaded");
      },
      onError(error) {
        $toast.error(errorCatch(error));
      },
    }
  );

  const uploadImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      const files = e.target.files;
      if (files?.length) {
        const formData = new FormData();

        formData.append("file", files[0]);
        formData.append("upload_preset", "paswb695");
        await mutateAsync(formData);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    },
    [mutateAsync]
  );

  return useMemo(() => ({ uploadImage, isLoading }), [uploadImage, isLoading]);
};

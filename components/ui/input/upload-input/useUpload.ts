import { errorCatch } from '@/lib/api/errorCatch';
import { FileService } from '@/lib/services/file/file.service';
import { $toast } from '@/lib/utils/toast';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useMutation } from 'react-query';

type TypeUpload = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  isLoading: boolean;
};

export const useUpload: TypeUpload = (onChange, folder) => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation(
    'upload file',
    (data: FormData) => FileService.upload(data, folder),
    {
      onSuccess({ data }) {
        onChange(data[0].url);
        $toast.success('Image uploaded');
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
        formData.append('image', files[0]);
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

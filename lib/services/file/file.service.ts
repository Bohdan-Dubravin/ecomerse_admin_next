import $api from '@/lib/api/insterceptors';

export const FileService = {
  async upload(file: FormData, folder?: string) {
    return $api.post<{ url: string; name: string }[]>('/files', file, {
      params: {
        folder,
      },
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    });
  },
};

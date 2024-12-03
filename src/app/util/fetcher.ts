import { MethodType } from '@/app/types/method-type';

export const fetcher = async (uri: string, method: keyof typeof MethodType) => {
  const response = await fetch('http://localhost:4000' + uri, {
    method: MethodType[method],
  });

  return response;
};

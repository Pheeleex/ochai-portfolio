import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}



export function formUrlQuery({ params, key, value, keysToRemove }: UrlQueryParams){
  const urlParams = new URLSearchParams(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      urlParams.delete(keyToRemove);
    });
  } else if (key && value) {
    urlParams.set(key, value);
  }

  return urlParams.toString() ? `?${urlParams.toString()}` : '';
}
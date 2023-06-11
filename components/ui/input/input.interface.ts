import { CSSProperties, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldProps {
  type?: string;
  placeholder: string;
  label: string;
  error?: FieldError | undefined;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface IField extends TypeInputPropsField {}
export interface IUploadField {
  folder?: string;
  image?: string;
  onChange: (...event: any[]) => void;
  placeholder: string;
  error?: FieldError;
  style?: CSSProperties;
  isNoImage?: boolean;
}

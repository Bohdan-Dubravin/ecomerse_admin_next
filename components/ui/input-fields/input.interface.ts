import {
  CSSProperties,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { FieldError } from "react-hook-form";

export interface FieldProps {
  type?: string;
  placeholder: string;
  label: string;
  error?: FieldError | undefined;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface IField extends TypeInputPropsField {}
export interface IUploadField {
  images: string[];
  placeholder: string;
  error?: FieldError;
  style?: CSSProperties;
  setCurrentImages: Dispatch<SetStateAction<string[]>>;
}

import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface FieldProps {
  type?: string;
  placeholder: string;
  label: string;
  error?: FieldError | undefined;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface IField extends TypeInputPropsField {}

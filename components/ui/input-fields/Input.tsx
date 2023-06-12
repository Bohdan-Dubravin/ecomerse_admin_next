import { forwardRef } from "react";
import { IField } from "./input.interface";

const InputField = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, label, error, type = "text", style, ...rest }, ref) => {
    return (
      <div>
        <label className="text-neutral-800 ">
          <p className="font-normal text-sm pb-1 ml-2"> {label}</p>
          <input
            className="text-md font-semibold placeholder:font-normal placeholder:text-neutral-500 px-4 py-[10px] border-2 border-neutral-300 rounded-md outline-none focus:border-neutral-800"
            placeholder={placeholder}
            type={type}
            ref={ref}
            {...rest}
          />
        </label>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
);
export default InputField;

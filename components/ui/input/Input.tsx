import { IInput } from "./input.interface";

const Input = ({ label, type = "text", placeholder }: IInput) => {
  return (
    <div>
      <label className="text-neutral-800 ">
        <p className="font-normal text-sm pb-1 ml-2"> {label}</p>
        <input
          className="text-md font-semibold placeholder:font-normal placeholder:text-neutral-500 px-4 py-[10px] border border-neutral-300 rounded-md outline-none focus:border-neutral-800"
          placeholder={placeholder}
          type="text"
        />
      </label>
    </div>
  );
};
export default Input;

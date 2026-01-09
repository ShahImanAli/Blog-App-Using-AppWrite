// forwardRef is a hook used for passing the ref to the child component. It is used to pass the ref to the input element in the Input component.
import { forwardRef, useId } from "react";

// Wrap the function with forwardRef to pass the ref to the Input element
const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId(); // To generate a unique id for the input element

  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1.5 pl-0.5 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`${className} ${
          type === "file"
            ? "file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-900 file:text-white hover:file:bg-gray-800 file:cursor-pointer cursor-pointer text-sm text-gray-600"
            : "px-3.5 py-2.5"
        } rounded-md bg-white text-gray-900 outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 duration-200 border border-gray-300 w-full placeholder:text-gray-400`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

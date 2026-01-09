import { forwardRef, useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId(); // To generate a unique id for the select element

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1.5 pl-0.5 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`${className} px-3.5 py-2.5 rounded-md bg-white text-gray-900 outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 duration-200 border border-gray-300 w-full capitalize`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);

"use client";

type InputDefaultProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputDefault = (props: InputDefaultProps) => {
  return (
    <div className="mb-4">
      {props.id && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {props.placeholder || props.name || "Input"}
        </label>
      )}
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputDefault;

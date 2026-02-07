"use client";

type ButtonDefaultProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonDefault = (props: ButtonDefaultProps) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 "
    />
  );
};

export default ButtonDefault;

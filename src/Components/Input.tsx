import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  placeholder: string;
  id?: string;
  children?: React.ReactElement;
  className?: string;
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  children,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className="h-20 mb-1 pt-3 pb-6">
      {placeholder && (
        <label  className="sr-only">
          {placeholder}
        </label>
      )}
      {children}
      <input type="text"
        {...rest}
        required
        className={
          "  p-10  h-12 pl-5 py-5  border-gray-300 placeholder-gray-300 text-gray-900"+
          className +" focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm " +
          className 
        }
        placeholder={placeholder}
      />
      {touched && (
        <div className="text-red-600 font-semibold ml-5 my-1">{error}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
    id:"1"
};
export default Input;
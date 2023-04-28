import type { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

interface Props {
  label?: string;
  value?: any;
  fieldIdentity?: any;
  placeholder?: string;
  type?: string;
  className?: string;
  formStyle?: string;
  onChange?: (...args: any) => any;
  readonly?: boolean;
  error?: string;
}

const Input = ({
  label,
  value,
  fieldIdentity,
  placeholder,
  type,
  className,
  formStyle,
  onChange = () => {},
  readonly,
  error = "",
}: Props) => {
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {label ? (
        <label htmlFor={fieldIdentity} className="w-full text-sm font-bold">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        name={fieldIdentity}
        id={fieldIdentity}
        type={type}
        readOnly={readonly}
        onChange={(e) => {
          onChange(e);
          setErrorMessage("");
        }}
        value={value}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-white text-sm rounded-lg ${formStyle}`}
      />
      {errorMessage ? (
        <div className="text-xs text-red-500">{errorMessage || ""}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;

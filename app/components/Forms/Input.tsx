import { ChangeEvent, useEffect } from "react";
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  error?: string;
}

const Input = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState(props.error);

  useEffect(() => {
    setErrorMessage(props.error);
  }, [props.error]);

  return (
    <div className={`w-full space-y-3 ${props.className}`}>
      {props.label ? (
        <label
          htmlFor={props.fieldIdentity}
          className="w-full text-sm font-bold"
        >
          {props.label}
        </label>
      ) : (
        ""
      )}
      <input
        name={props.fieldIdentity}
        id={props.fieldIdentity}
        type={props.type}
        readOnly={props.readonly}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className={`w-full px-4 py-3 border-white text-sm rounded-lg ${props.formStyle}`}
      />
      {errorMessage ? <div></div> : ""}
    </div>
  );
};

export default Input;

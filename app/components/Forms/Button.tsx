import type { ReactNode } from "react";
import React from "react";

interface Props {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: any;
  name?: any;
  value?: any;
  type?: any;
}

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      name={props.name}
      value={props.value}
      className={`flex ${
        props.className ? "" : "justify-start"
      } gap-2 px-4 py-3 text-sm text-white rounded-lg ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

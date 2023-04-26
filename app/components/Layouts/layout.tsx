import type { ReactNode } from "react";
import React from "react";

interface Props {
  children?: ReactNode;
}

const Layout = (props: Props) => {
  return <div className="w-full h-screen bg-gray-900">{props.children}</div>;
};

export default Layout;

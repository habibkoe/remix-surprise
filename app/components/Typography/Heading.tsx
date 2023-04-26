import React, { useState } from "react";

interface Props {
  value?: any;
  type?: string;
  className?: string;
}

const Heading = (props: Props) => {
  return <div className={`w-full ${props.className}`}>{props.value}</div>;
};

export default Heading;

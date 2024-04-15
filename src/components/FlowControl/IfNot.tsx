import React from "react";
import { PropsWithChildren } from 'react'

export interface IfProps {
  condition: boolean;
}

const IfNot = (props: PropsWithChildren<IfProps>) => {
  if (!props.condition) {
    return props.children;
  } else {
    return null;
  }
};

export default IfNot;


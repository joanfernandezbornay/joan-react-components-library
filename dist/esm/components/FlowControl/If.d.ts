import React from "react";
import { PropsWithChildren } from 'react';
export interface IfProps {
    condition: boolean;
}
declare const If: (props: PropsWithChildren<IfProps>) => React.ReactNode;
export default If;

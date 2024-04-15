import React from "react";
import { PropsWithChildren } from 'react';
export interface IfProps {
    condition: boolean;
}
declare const IfNot: (props: PropsWithChildren<IfProps>) => React.ReactNode;
export default IfNot;

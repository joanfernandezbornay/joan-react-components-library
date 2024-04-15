import React, { PropsWithChildren } from 'react';

interface IfProps$1 {
    condition: boolean;
}
declare const If: (props: PropsWithChildren<IfProps$1>) => React.ReactNode;

interface IfProps {
    condition: boolean;
}
declare const IfNot: (props: PropsWithChildren<IfProps>) => React.ReactNode;

export { If, IfNot };

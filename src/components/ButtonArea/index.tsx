import React from 'react';
import { ButtonAreaDesign } from './style';

export interface ButtonAreaProps {
    flexDirection?: string;
    children: React.ReactNode | React.ReactNode[];
}

export function ButtonArea(props: ButtonAreaProps) {
    return <ButtonAreaDesign flexDirection={props.flexDirection}>{props.children}</ButtonAreaDesign>;
}

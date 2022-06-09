import { useState } from "react";
import styled from "styled-components";

type ButtonAreaProps = {
    flexDirection?: string;
    children: React.ReactNode | React.ReactNode[];
};

const ButtonAreaDesign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props: ButtonAreaProps) => props.flexDirection};
`;

export function ButtonArea(props: ButtonAreaProps) {
    return (
        <ButtonAreaDesign flexDirection={props.flexDirection}>
            {props.children}
        </ButtonAreaDesign>
    );
}

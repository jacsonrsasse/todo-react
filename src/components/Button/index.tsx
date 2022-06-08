import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
    text?: string;
    icon?: IconDefinition;
    rounded?: boolean;
};

const ButtonDesing = styled.button`
    padding: 0.5rem 0;
    margin: 0.5rem 0%;
    border-radius: 3px;
    width: 6rem;
    background-color: transparent;
    color: ${(props) => props.theme.corSistemaBase1};
    border: 2px solid ${(props) => props.theme.corSistemaBase1};
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 10px;

    &:active {
        background-color: ${(props) => props.theme.corSistemaBase1};
        color: ${(props) => props.theme.corSistemaBase9};
    }

    ${(props: ButtonProps) =>
        props.rounded &&
        css`
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        `}
`;

export function Button(props: ButtonProps) {
    const [rounded, setRounded] = useState(props.rounded);

    return (
        <ButtonDesing rounded={rounded}>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            {props.text && !props.rounded ? props.text : ""}
        </ButtonDesing>
    );
}

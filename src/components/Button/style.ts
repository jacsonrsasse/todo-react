import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const ButtonDesing = styled.button`
    padding: 0.5rem 0;
    border-radius: 3px;
    width: 6rem;
    background-color: transparent;
    color: ${(props) => props.theme.buttonText};
    border: 2px solid ${(props) => props.theme.buttonBorderColor};
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 10px;

    &:active {
        background-color: ${(props) => props.theme.background};
        border-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.buttonActiveText};
    }

    ${(props: ButtonProps) =>
        props.rounded &&
        css`
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;

            ${(props: ButtonProps) =>
                props.iconColor &&
                css`
                    border-color: transparent;
                    transition: border 0.2s ease-in-out;

                    &:hover {
                        border-color: ${(props: ButtonProps) => props.iconColor};
                        border-width: 2px;
                    }

                    &:active {
                        background-color: transparent;
                        box-shadow: inset 0 0 10px ${(props: ButtonProps) => props.iconColor};
                    }
                `}
        `}
`;

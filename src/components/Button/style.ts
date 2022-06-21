import styled, { css } from 'styled-components';

interface ButtonDesignProps {
    primary: boolean;
}

const ButtonDesign = styled.button`
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

    ${({ primary }: ButtonDesignProps) =>
        primary &&
        css`
            color: white;
            background-color: ${(props) => props.theme.buttonBorderColor};
        `}
`;

export default ButtonDesign;

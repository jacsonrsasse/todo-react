import styled, { css } from 'styled-components';
import { ButtonAreaProps } from '.';

export const ButtonAreaDesign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${(props: ButtonAreaProps) =>
        props.flexDirection &&
        css`
            gap: 0;
            justify-content: space-around;
            flex-direction: ${(props: ButtonAreaProps) => props.flexDirection};
        `}
`;

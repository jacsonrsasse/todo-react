import styled, { css } from 'styled-components';
import ButtonProps from '../../utils/button';
import ButtonDesign from '../NewButton/style';

const RoudedButtonDesign = styled(ButtonDesign)`
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
`;

export default RoudedButtonDesign;

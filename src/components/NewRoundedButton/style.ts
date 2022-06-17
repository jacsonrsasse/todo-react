import styled, { css } from 'styled-components';
import ButtonDesign from '../NewButton/style';
import { RoundedButtonDesignProps } from './RoundedButton';

const RoudedButtonDesign = styled(ButtonDesign)`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;

    ${({ iconColor }: RoundedButtonDesignProps) =>
        iconColor &&
        css`
            border-color: transparent;
            transition: border 0.2s ease-in-out;

            &:hover {
                border-color: ${iconColor};
                border-width: 2px;
            }

            &:active {
                background-color: transparent;
                box-shadow: inset 0 0 10px ${iconColor};
            }
        `}
`;

export default RoudedButtonDesign;

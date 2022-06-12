import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  text?: string;
  icon?: IconDefinition;
  iconColor?: string;
  rounded?: boolean;
  onClick: () => void;
}

const ButtonDesing = styled.button`
  padding: 0.5rem 0;
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
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;

      ${(props: ButtonProps) =>
        props.iconColor &&
        css`
          border-color: transparent;

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

export function Button(props: ButtonProps) {
  return (
    <ButtonDesing rounded={props.rounded} iconColor={props.iconColor} onClick={props.onClick}>
      {props.icon && <FontAwesomeIcon icon={props.icon} color={props.iconColor} size="lg" />}
      {props.text && !props.rounded ? props.text : ''}
    </ButtonDesing>
  );
}

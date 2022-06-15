import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDesing } from './style';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ButtonProps {
    text?: string;
    icon?: IconDefinition;
    iconColor?: string;
    rounded?: boolean;
    onClick: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <ButtonDesing rounded={props.rounded} iconColor={props.iconColor} onClick={props.onClick}>
            {props.icon && <FontAwesomeIcon icon={props.icon} color={props.iconColor} size="lg" />}
            {props.text && !props.rounded ? props.text : ''}
        </ButtonDesing>
    );
}

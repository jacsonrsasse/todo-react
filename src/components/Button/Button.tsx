import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ButtonProps = {
    text?: string;
    icon?: IconDefinition;
};

export function Button(props: ButtonProps) {
    return (
        <button>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            {props.text ?? ""}
        </button>
    );
}

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface RoundedButtonDesignProps {
    iconColor: string;
}

export interface RoundedButtonProps extends RoundedButtonDesignProps {
    icon: IconDefinition;
    onClick: () => void;
}

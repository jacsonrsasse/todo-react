export default interface ButtonProps {
    text?: string;
    icon?: IconDefinition;
    iconColor?: string;
    rounded?: boolean;
    onClick: () => void;
}

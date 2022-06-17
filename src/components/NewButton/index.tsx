import ButtonDesign from './style';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
    return <ButtonDesign onClick={onClick}>{text}</ButtonDesign>;
}

import ButtonDesign from './style';

export interface ButtonProps {
    text: string;
    onClick: () => void;
    primary?: boolean;
}

export function Button({ primary, text, onClick }: ButtonProps) {
    return (
        <ButtonDesign onClick={onClick} primary={primary || false}>
            {text}
        </ButtonDesign>
    );
}

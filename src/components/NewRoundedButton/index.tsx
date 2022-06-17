import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoundedButtonProps } from './RoundedButton';
import RoudedButtonDesign from './style';

export function RoundedButton({ icon, iconColor, onClick }: RoundedButtonProps) {
    return (
        <RoudedButtonDesign iconColor={iconColor} onClick={onClick}>
            <FontAwesomeIcon icon={icon} color={iconColor} size="lg" />
        </RoudedButtonDesign>
    );
}

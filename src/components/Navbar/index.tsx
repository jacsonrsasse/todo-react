import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';
import { NavbarDesign } from './style';

interface NavbarProps {
    onChangeSwitch: () => void;
    isDarkTheme: boolean;
}

export function Navbar({ onChangeSwitch, isDarkTheme }: NavbarProps) {
    const theme = useTheme();
    return (
        <NavbarDesign>
            <label htmlFor="checkboxTheme" className="toggler">
                <input type="checkbox" id="checkboxTheme" onChange={onChangeSwitch} checked={isDarkTheme} />
                <span className="ball"></span>
                <FontAwesomeIcon icon={faSun} className="sun" color={theme.appBackground} />
                <FontAwesomeIcon icon={faMoon} className="moon" color={theme.appBackground} />
            </label>
        </NavbarDesign>
    );
}

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { useTheme } from 'styled-components';

const NavbarDesign = styled.nav`
    position: fixed;
    height: 60px;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;

    & #checkboxTheme {
        display: none;

        &:checked + .ball {
            transform: translate(29px, -50%);
        }
    }

    & .toggler {
        display: block;
        width: 60px;
        height: 31px;
        border: 2px solid ${(props) => props.theme.appBackground};
        border-radius: 30px;
        position: relative;
        user-select: none;
        cursor: pointer;
    }

    & .ball,
    .sun,
    .moon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    & .ball {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-color: ${(props) => props.theme.appBackground};
        border-radius: 50%;
        left: 1px;
        z-index: 10;
        transition: transform 0.3s ease-in-out;
    }

    & .sun {
        left: 5px;
    }

    & .moon {
        right: 5px;
    }
`;

interface NavbarProps {
    onChangeSwitch: () => void;
}

export function Navbar({ onChangeSwitch }: NavbarProps) {
    const theme = useTheme();
    return (
        <NavbarDesign>
            <label htmlFor="checkboxTheme" className="toggler">
                <input type="checkbox" id="checkboxTheme" onChange={onChangeSwitch} />
                <span className="ball"></span>
                <FontAwesomeIcon icon={faSun} className="sun" color={theme.appBackground} />
                <FontAwesomeIcon icon={faMoon} className="moon" color={theme.appBackground} />
            </label>
        </NavbarDesign>
    );
}

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from '../../components/Navbar';
import App from '../App';
import { GlobalStyle } from './global-style';
import { theme } from './theme';

export function Page() {
    const verifyTime = (): boolean => {
        const hour = new Date().getHours();
        return hour > 21 || hour < 6;
    };

    const [isDarkTheme, setIsDarkTheme] = useState(verifyTime());

    const handleSwitchTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
                <Navbar onChangeSwitch={handleSwitchTheme} isDarkTheme={isDarkTheme} />
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </div>
    );
}

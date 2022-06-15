import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from '../../components/Navbar';
import App from '../App';
import { GlobalStyle } from './global-style';
import { theme } from './theme';

export function Page() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleSwitchTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
                <Navbar onChangeSwitch={handleSwitchTheme} />
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </div>
    );
}

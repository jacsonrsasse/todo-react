import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar } from '../../components/Navbar';
import App from '../App';

const theme = {
    // corSistemaBase1: '#7d838f',
    // corSistemaBase2: '#9ba0a9',
    // corSistemaBase3: '#bcbfc6',
    // corSistemaBase4: '#aab0b6',
    // corSistemaBase5: '#d7d8da',
    // corSistemaBase6: '#fefeff',
    // corSistemaBase7: '#b5b5b5',
    // corSistemaBase8: '#dadada',
    // corSistemaBase9: '#ffffff',

    darkTheme: {
        background: '#3A3845',
        // appBackground: '#F7CCAC',
        appBackground: '#dadada',
        buttonText: '#3a393b',
        buttonBorderColor: '#3a393b',
        buttonActiveText: '#ffffff',
    },
    lightTheme: {
        background: '#7d838f',
        appBackground: '#dadada',
        buttonText: '#3a393b',
        buttonBorderColor: '#3a393b',
        buttonActiveText: '#ffffff',
    },
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root>div {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props: any) => props.theme.background};
    }
`;

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

import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar } from '../../components/Navbar';
import App from '../App';

const theme = {
    corSistemaBase1: '#7d838f',
    corSistemaBase2: '#9ba0a9',
    corSistemaBase3: '#bcbfc6',
    corSistemaBase4: '#aab0b6',
    corSistemaBase5: '#d7d8da',
    corSistemaBase6: '#fefeff',
    corSistemaBase7: '#b5b5b5',
    corSistemaBase8: '#dadada',
    corSistemaBase9: '#ffffff',

    darkTheme: {
        corSistemaBase1: '#595959',
        corSistemaBase2: '#63656A',
        corSistemaBase3: '#68727A',
        corSistemaBase4: '#6A8187',
        corSistemaBase5: '#6F908F',
        corSistemaBase6: '#7A9E92',
    },
    lightTheme: {
        corSistemaBase1: '#E2E2E2',
        corSistemaBase2: '#C4C6CC',
        corSistemaBase3: '#A1ADB5',
        corSistemaBase4: '#7D949B',
        corSistemaBase5: '#5D7D7C',
        corSistemaBase6: '#43655A',
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
        background-color: ${(props: any) => props.theme.corSistemaBase1};
    }
`;

export function Page() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleSwitchTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <Navbar onChangeSwitch={handleSwitchTheme} />
            <ThemeProvider theme={isDarkTheme ? theme.lightTheme : theme.darkTheme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </div>
    );
}

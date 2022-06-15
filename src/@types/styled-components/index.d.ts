// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        background?: string;
        appBackground?: string;
        buttonText?: string;
        buttonBorderColor?: string;
        buttonActiveText?: string;
        text?: string;
        title?: string;
    }
}

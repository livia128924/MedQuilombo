import 'styled-components';
import {
	ISizes,
	IThemeBreakpoints,
	IThemeColors,
	IThemeComponents,

	IThemeShapes,
} from "./types";
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        shadows: Array<string>;
        colors: IThemeColors;
		shapes: IThemeShapes;
		spacing: ISizes;
		components: IThemeComponents;
		breakpoints: IThemeBreakpoints;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            neutral: string;
            background: string;
            text: string;
            disable: string;
            skeleton: {
                light: string;
                dark: string;
            }
        };
    }
}


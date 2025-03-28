export interface ISizesPlus {
	mini: string;
	small: string;
	medium: string;
	large: string;
}

export interface ISizes {
	small: string;
	medium: string;
	large: string;
}

export interface IThemeFonts {
	family: string;
	size: ISizesPlus;
}

export interface IColors {
	main: string;
	light: string;
	dark: string;
}

export interface IThemeColors {
	default: { light: string; dark: string };
	disabled: string;
	neutral: Array<string>;

	primary: IColors;
	secondary: IColors;
	info: IColors;
	warning: IColors;
	success: IColors;
	error: IColors;

	skeleton: {
		light: string;
		dark: string;
	};

	fade: {
		primary: string;
		secondary: string;
		info: string;
		success: string;
		warning: string;
		error: string;
		light: string;
		dark: string;
		transparent: string;
	};

	background: {
		default: string;
		overlay: string;
		soft: string;
	};

	text: {
		default: { light: string; dark: string };
		main: string;
		light: string;
		dark: string;
	};

	border: string;
	borderBottom: string;
}

export interface IThemeShapes {
	radius: { small: string; medium: string; large: string };
	small: string;
	medium: string;
	large: string;
}

export interface IThemeComponents {
	appBar: { height: string };
	sidebarOpen: { width: string };
	sidebarClose: { width: string };
	sidebarOpenMobile: { width: string };
	sidebarCloseMobile: { width: string };
}

export interface IThemeBreakpoints {
	tablet: string;
}

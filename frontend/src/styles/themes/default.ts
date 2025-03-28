import { DefaultTheme } from "styled-components";
import tinycolor from "tinycolor2";
export const primary = "#84A985";
export const secondary = "#1E325F";
export const soft = "#F7F8FF";
export const warning = "#E6A400";
export const success = "#1FC7A3";
export const error = "#FD5977";
export const info = "#4B5467";
export const text = "#0E2C3ABC";
export const neutral = "#404040";
export const dark = "#172647";
export const light = "#FFFFFF";
export const lightText = "#636C82";
export const lightRate = 7;
export const darkRate = 7;

const defaultTheme: DefaultTheme = {
  title: "defaultTheme",

  colors: {
    //primary: "#188ED8",
    //  secondary: "#F1511B",
    //tertiary: '',
    //neutral: "#575757",
    //background: '',
    // text: "#636C82",
    //disable: "#B3B3B3",
    default: {
      light: "#ffffff",
      dark: "#292929",
    },
    disabled: "#B3B3B3",

    neutral: [
      tinycolor(neutral).lighten(0).toHex8String(),
      tinycolor(neutral).lighten(10).toHex8String(),
      tinycolor(neutral).lighten(20).toHex8String(),
      tinycolor(neutral).lighten(30).toHex8String(),
      tinycolor(neutral).lighten(40).toHex8String(),
      tinycolor(neutral).lighten(50).toHex8String(),
      tinycolor(neutral).lighten(60).toHex8String(),
      tinycolor(neutral).lighten(70).toHex8String(),
      tinycolor(neutral).lighten(73).toHex8String(),
      tinycolor(neutral).lighten(90).toHex8String(),
      tinycolor(neutral).lighten(100).toHex8String(),
    ],

    primary: {
      main: primary,
      light: "#FBFCF8",
      dark: tinycolor(primary).darken(darkRate).toHex8String(),
    },

    secondary: {
      main: secondary,
      light: "#E9EBEF",
      dark: tinycolor(secondary).darken(darkRate).toHex8String(),
    },

    info: {
      main: info,
      light: tinycolor(info).lighten(57).toHex8String(),
      dark: tinycolor(info).lighten(13).toHex8String(),
    },

    warning: {
      main: warning,
      light: tinycolor(warning).lighten(50).toHex8String(),
      dark: tinycolor(warning).darken(35).toHex8String(),
    },

    success: {
      main: success,
      light: tinycolor(success).lighten(48).toHex8String(),
      dark: tinycolor(success).darken(50).toHex8String(),
    },

    error: {
      main: error,
      light: tinycolor(error).lighten(38).toHex8String(),
      dark: tinycolor(error).darken(35).toHex8String(),
    },

    skeleton: {
      light: "grey.700",
      dark: "grey.500",
    },

    fade: {
      primary: tinycolor(primary).setAlpha(0.2).toHex8String(),
      secondary: tinycolor(secondary).setAlpha(0.2).toHex8String(),
      info: tinycolor(info).setAlpha(0.2).toHex8String(),
      success: tinycolor(success).setAlpha(0.2).toHex8String(),
      warning: tinycolor(warning).setAlpha(0.2).toHex8String(),
      error: tinycolor(error).setAlpha(0.2).toHex8String(),
      light: tinycolor(light).setAlpha(0.2).toHex8String(),
      dark: tinycolor(dark).setAlpha(0.1).toHex8String(),
      transparent: tinycolor(light).setAlpha(0).toHex8String(),
    },

    background: {
      default: primary,
      overlay: "rgba(97,108,132,0.6)",
      soft: soft,
    },

    text: {
      default: { light: light, dark: dark },
      main: text,
      light: lightText,
      dark: dark,
    },

    border: "#707070",
    borderBottom: "#EDF1FC",
  },
  shapes: {
    radius: { small: "5px", medium: "8px", large: "16px" },
    small: "8px",
    medium: "16px",
    large: "24px",
  },

  spacing: { small: "16px", medium: "32px", large: "48px" },
  shadows: [],
  components: {
    appBar: { height: "70px" },
    sidebarOpen: { width: "300px" },
    sidebarClose: { width: "105px" },
    sidebarOpenMobile: { width: "200px" },
    sidebarCloseMobile: { width: "100px" },
  },
  breakpoints: { tablet: "800px" },
};

export default defaultTheme;

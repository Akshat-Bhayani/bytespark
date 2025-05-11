// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        lighter: string;
        dark: string;
        darker: string;
      };
      background: {
        main: string;
        light: string;
        dark: string;
        gradient: string;
      };
      text: {
        primary: string;
        secondary: string;
        light: string;
        muted: string;
      };
      lightText: {
        primary: string;
        secondary: string;
        light: string;
        muted: string;
      };
      state: {
        hover: string;
        active: string;
        disabled: string;
      };
      accent?: string; // Add this since you're using it in hover
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      glow: string;
    };
    transitions: {
      default: string;
      fast: string;
      slow: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      full: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      hover: string;
    };
  }
}

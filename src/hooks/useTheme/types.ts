import {Palette, PaletteMode, Theme} from "@mui/material";
declare module '@mui/material/styles' {
    interface CustomTheme {
        colors: {
            [key:string]: string;
        };
    }

    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}
}
export interface ITheme {
    theme: Theme,
    mode: PaletteMode,
    palette: Palette
}
